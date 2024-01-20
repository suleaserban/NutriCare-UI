import { Injectable } from '@angular/core';
import { QuizzService } from '../quizz service/quizz.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserScoreDTO } from 'src/app/models/userScoreDTO';

@Injectable({
  providedIn: 'root',
})
export class UserScoreService {
  private apiUrl = 'http://localhost:8080/api/userScore/users';

  constructor(private http: HttpClient, private quizzService: QuizzService) {}

  getTopUserScores(userId: number): Observable<UserScoreDTO[]> {
    return this.http.get<UserScoreDTO[]>(`${this.apiUrl}/${userId}/top-scores`);
  }
}
