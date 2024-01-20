import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PonderiDto } from 'src/app/models/ponderiDTO';
import { AuthService } from 'src/app/services/auth service/auth.service';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';
import { UserService } from 'src/app/services/user service/user.service';

@Component({
  selector: 'app-question31',
  templateUrl: './question31.component.html',
  styleUrls: ['./question31.component.css'],
})
export class Question31Component {
  constructor(
    private router: Router,
    private quizzService: QuizzService,
    private http: HttpClient,
    private userService: UserService,
    private authService: AuthService
  ) {}

  handleResponse(pondere: number) {
    this.quizzService.setPondere('factor_fier', pondere);
    console.log(this.quizzService.getFinalPonderiDto());
    this.calculateUserScore();
    this.router.navigate(['/analyzing-answers']);
  }

  private calculateUserScore() {
    let id = parseInt(localStorage.getItem('id')!);
    let ponderiDto = new PonderiDto();
    ponderiDto.ponderi = this.quizzService.getFinalPonderiDto();
    this.userService.calculateUserScore(id, ponderiDto).subscribe(
      (response) => {
        console.log('success', response);
      },
      (error) => {
        console.error('error', error);
      }
    );
  }
}
