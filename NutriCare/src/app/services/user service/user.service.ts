import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuizzService } from '../quizz service/quizz.service';
import { PonderiDto } from 'src/app/models/ponderiDTO';
import { DoctoriDTO } from 'src/app/models/doctoriDTO';
import { Role } from 'src/app/models/role.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient, private quizzService: QuizzService) {}

  getAllDoctors(): Observable<DoctoriDTO[]> {
    return this.http.get<DoctoriDTO[]>(`${this.apiUrl}/get-all-doctors`);
  }

  calculateUserScore(
    id: number,
    ponderiDto: any,
    isVegan: any
  ): Observable<any> {
    const requestBody = {
      ponderiDto: ponderiDto,
      isVegan: isVegan,
    };
    return this.http.post(`${this.apiUrl}/${id}/calculate-scores`, requestBody);
  }

  getUserRoleById(id: number): Observable<Role> {
    return this.http.get<Role>(`${this.apiUrl}/get-role-by-id/${id}`);
  }
}
