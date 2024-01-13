import { Injectable } from '@angular/core';
import { QuizzService } from '../quizz service/quizz.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserScore } from 'src/app/models/userScore.model';

@Injectable({
  providedIn: 'root',
})
export class UserScoreService {
  private apiUrl = 'http://localhost:8080/api/userScore';

  constructor(private http: HttpClient, private quizzService: QuizzService) {}

  userScore!: UserScore;

  getTopUserScores(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${userId}/top-scores`);
  }
}
