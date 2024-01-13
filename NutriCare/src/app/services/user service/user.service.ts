import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuizzService } from '../quizz service/quizz.service';
import { PonderiDto } from 'src/app/models/ponderi.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient, private quizzService: QuizzService) {}

  calculateUserScore(email: string,ponderiDto: any): Observable<any> {
   
    return this.http.post(`${this.apiUrl}/${email}/calculate-scores`, ponderiDto);
  }
}