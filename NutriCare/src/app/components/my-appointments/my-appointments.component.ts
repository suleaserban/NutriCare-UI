import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointmentDTO';
import { DoctoriDTO } from 'src/app/models/doctoriDTO';
import { AppointmentService } from 'src/app/services/appointment service/appointment.service';
import { UserService } from 'src/app/services/user service/user.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.css'],
})
export class MyAppointmentsComponent implements OnInit {
  appointmentForm: FormGroup;
  detailsForm: FormGroup;
  appointments: Appointment[] = [];
  isAddingAppointment = false;
  displayDetailsModal: boolean = false;
  selectedDoctorId?: number;
  doctors: DoctoriDTO[] = [];
  appointmentDate?: Date;
  userId?: number;
  displayModal: boolean = false;
  selectedDate?: string;
  availableTimes: string[] = [];
  selectedTimeSlot: string | null = null;
  minDate!: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private appointmentService: AppointmentService,
    private router: Router
  ) {
    this.detailsForm = this.fb.group({
      doctorNume: [{ value: '', disabled: true }],
      appointmentDate: [{ value: '', disabled: true }],
      summary: [{ value: '', disabled: true }],
    });
    this.appointmentForm = this.fb.group({
      doctorId: ['', Validators.required],
      appointmentDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.userId = parseInt(localStorage.getItem('id')!);
    this.loadUserAppointments();
    this.loadDoctors();
    this.minDate = new Date().toISOString().split('T')[0];
  }

  loadDoctors(): void {
    this.userService.getAllDoctors().subscribe((doctors) => {
      this.doctors = doctors;
    });
  }

  toggleAddAppointment(): void {
    this.displayModal = !this.displayModal;
  }

  addAppointment(): void {
    if (this.appointmentForm.valid && this.selectedTimeSlot) {
      const formValue = this.appointmentForm.value;
      const dateTime = `${formValue.appointmentDate}T${this.selectedTimeSlot}:00`;

      const newAppointment: Appointment = {
        doctorId: formValue.doctorId!,
        userId: this.userId!,
        appointmentDate: dateTime,
      };

      this.appointmentService.addAppointment(newAppointment).subscribe({
        next: (appointment) => {
          console.log('Programare adaugata cu succes', appointment);
          this.appointments.push(appointment);
          this.displayModal = false;
          this.appointmentForm.reset();
          this.loadUserAppointments();
          this.selectedTimeSlot = '';
          this.availableTimes = [];
        },
      });
    }
    this.toggleAddAppointment();
  }

  loadUserAppointments(): void {
    this.appointmentService
      .getUserAppointments(this.userId!)
      .subscribe((appointments) => {
        this.appointments = appointments;
      });
  }

  openMeetingLink(meetingLink: string): void {
    window.open(meetingLink, '_blank');
  }

  onDoctorAndDateChange(): void {
    const doctorId = this.appointmentForm.get('doctorId')?.value;
    const appointmentDate = this.appointmentForm.get('appointmentDate')?.value;

    if (doctorId && appointmentDate) {
      this.appointmentService
        .getAvailableAppointmentTimes(doctorId, appointmentDate)
        .subscribe(
          (times) => {
            this.availableTimes = times;
            this.selectedTimeSlot = '';
          },
          (error) => {
            console.error('Error fetching available times', error);
          }
        );
    }
  }

  selectTimeSlot(time: string): void {
    this.selectedTimeSlot = time;
  }

  openDetailsModal(appointment: Appointment): void {
    let formattedDate = '';
    if (
      typeof appointment.appointmentDate === 'string' &&
      appointment.appointmentDate
    ) {
      formattedDate = this.formatDate(appointment.appointmentDate);
    } else {
      formattedDate = 'Data indisponibilă';
    }

    this.detailsForm.setValue({
      doctorNume: `Dr. ${appointment.doctorNume}`,
      appointmentDate: formattedDate,
      summary: appointment.summary || 'N/A',
    });
    this.displayDetailsModal = true;
    this.displayModal = false;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date
      ? `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
      : 'Invalid date';
  }

  generatePdf(): void {
    const docDefinition: any = {
      content: [
        { text: 'Nutricare S.R.L', style: 'title' },
        { text: 'Recomandarea medicului', style: 'subtitle' },
        { text: 'Detalii Programare', style: 'header' },
        {
          text: `Nume Doctor: ${this.detailsForm.get('doctorNume')?.value}`,
          style: 'subheader',
        },
        {
          text: `Data și Ora: ${
            this.detailsForm.get('appointmentDate')?.value
          }`,
          style: 'subheader',
        },
        {
          text: `Sumar: ${this.detailsForm.get('summary')?.value}`,
          style: 'subheader',
        },
      ],
      styles: {
        title: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 10],
        },
        subtitle: {
          fontSize: 16,
          italics: true,
          alignment: 'center',
          margin: [0, 20, 0, 10],
        },
        header: {
          fontSize: 14,
          bold: true,
          margin: [0, 0, 5, 0],
        },
        subheader: {
          fontSize: 12,
          margin: [0, 0, 5, 0],
        },
      },
    };

    pdfMake.createPdf(docDefinition).download('detalii-programare.pdf');
  }
}
