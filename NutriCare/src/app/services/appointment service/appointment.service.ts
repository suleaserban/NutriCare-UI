import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/models/appointmentDTO';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private baseUrl = 'http://localhost:8080/api/appointments';

  constructor(private http: HttpClient) {}

  getUserAppointments(userId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.baseUrl}/user/${userId}`);
  }

  getDoctorAppointments(doctorId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.baseUrl}/doctor/${doctorId}`);
  }
  addAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(
      `${this.baseUrl}/add-appointment`,
      appointment
    );
  }

  getAvailableAppointmentTimes(
    doctorId: number,
    date: string
  ): Observable<string[]> {
    const url = `${this.baseUrl}/available-times`;
    let params = new HttpParams()
      .set('doctorId', doctorId.toString())
      .set('date', date);

    return this.http.get<string[]>(url, { params });
  }

  updateAppointmentStatus(
    appointmentId: number,
    status: string
  ): Observable<Appointment> {
    return this.http.put<Appointment>(
      `${this.baseUrl}/${appointmentId}/status`,
      { status }
    );
  }

  updateAppointmentSummary(
    appointmentId: number,
    summary: string
  ): Observable<Appointment> {
    return this.http.put<Appointment>(
      `${this.baseUrl}/${appointmentId}/update-summary`,
      { summary }
    );
  }
}
