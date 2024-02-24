import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  currentProgress?: number;
  constructor(
    private router: Router,
    private quizzService: QuizzService,
    private http: HttpClient,
    private userService: UserService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.quizzService.getProgress().subscribe((progress) => {
      this.currentProgress = progress;
    });

    this.updateProgress();
  }

  updateProgress() {
    const urlSegments = this.route.snapshot.url;
    const questionNumber =
      urlSegments.length > 0
        ? +urlSegments[urlSegments.length - 1].path.replace('question', '')
        : 0;
    this.quizzService.setCurrentQuestionIndex(questionNumber);
  }

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
