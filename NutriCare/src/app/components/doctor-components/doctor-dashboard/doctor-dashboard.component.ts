import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointmentDTO';
import { AppointmentService } from 'src/app/services/appointment service/appointment.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css'],
})
export class DoctorDashboardComponent implements OnInit {
  doctorId?: number;
  appointments: Appointment[] = [];
  displaySummaryModal = false;
  currentAppointmentForSummary?: Appointment;
  currentSummary!: string;

  constructor(private appointmentService: AppointmentService) {
    this.doctorId = parseInt(localStorage.getItem('id')!);
  }

  ngOnInit(): void {
    this.loadDoctorAppointments();
  }

  loadDoctorAppointments(): void {
    this.appointmentService
      .getDoctorAppointments(this.doctorId!)
      .subscribe((appointments) => {
        this.appointments = appointments;
      });
  }

  openMeetingLink(meetingLink: string): void {
    window.open(meetingLink, '_blank');
  }

  changeAppointmentStatus(appointment: Appointment): void {
    this.appointmentService
      .updateAppointmentStatus(appointment.id!, appointment.status!)
      .subscribe(() => {});
  }

  openSummaryModal(appointment: Appointment): void {
    this.currentAppointmentForSummary = appointment;
    this.currentSummary = appointment.summary || '';
    this.displaySummaryModal = true;
  }

  updateSummary(): void {
    if (this.currentAppointmentForSummary && this.currentSummary) {
      this.appointmentService
        .updateAppointmentSummary(
          this.currentAppointmentForSummary.id!,
          this.currentSummary
        )
        .subscribe(() => {
          console.log(this.currentSummary);
          this.displaySummaryModal = false;
          this.currentAppointmentForSummary!.summary = this.currentSummary;
          this.currentSummary = '';
        });
    }
  }
}
