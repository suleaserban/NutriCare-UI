export interface Appointment {
  id?: number;
  doctorId?: number;
  doctorNume?: string;
  userId?: number;
  userNume?: string;
  appointmentDate?: Date | string;
  status?: string;
  summary?: string;
  link?: string;
}
