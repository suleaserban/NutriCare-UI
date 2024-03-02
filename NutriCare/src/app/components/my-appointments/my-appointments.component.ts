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
    if (this.appointmentForm.valid) {
      const formValue = this.appointmentForm.value;

      const newAppointment: Appointment = {
        doctorId: formValue.doctorId!,
        userId: this.userId!,
        dataProgramare: formValue.appointmentDate,
      };

      this.appointmentService.addAppointment(newAppointment).subscribe({
        next: (appointment) => {
          console.log('Programare adăugată cu succes', appointment);
          this.appointments.push(appointment);
          this.displayModal = false;
          this.appointmentForm.reset();
        },
        error: (error) => {
          console.error('Eroare la adăugarea programării', error);
        },
      });
    }
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

  redirectToZoomMeet(appointment: Appointment): void {
    this.router.navigate(['/zoom-meet']);
  }
}
