import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointmentDTO';
import { DoctoriDTO } from 'src/app/models/doctoriDTO';
import { AppointmentService } from 'src/app/services/appointment service/appointment.service';
import { UserService } from 'src/app/services/user service/user.service';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.css'],
})
export class MyAppointmentsComponent implements OnInit {
  appointmentForm: FormGroup;
  appointments: Appointment[] = [];
  isAddingAppointment = false;
  selectedDoctorId?: number;
  doctors: DoctoriDTO[] = [];
  appointmentDate?: Date;
  userId?: number;
  displayModal: boolean = false;
  selectedDate?: string;
  availableTimes: string[] = [];
  selectedTimeSlot: string | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private appointmentService: AppointmentService,
    private router: Router
  ) {
    this.appointmentForm = this.fb.group({
      doctorId: ['', Validators.required],
      appointmentDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.userId = parseInt(localStorage.getItem('id')!);
    this.loadUserAppointments();
    this.loadDoctors();
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
        error: (error) => {
          console.error('Eroare la adaugarea programarii', error);
        },
      });
    }
    this.toggleAddAppointment();
  }

  loadUserAppointments(): void {
    this.appointmentService.getUserAppointments(this.userId!).subscribe(
      (appointments) => {
        this.appointments = appointments;
      },
      (error) => {
        console.error('Error fetching appointments', error);
      }
    );
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
}
