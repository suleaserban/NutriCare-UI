import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css'],
})
export class Question1Component implements OnInit {
  currentProgress: number = 0;
  constructor(
    private router: Router,
    private quizzService: QuizzService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.updateProgress();
  }

  updateProgress() {
    const urlSegments = this.route.snapshot.url;
    const questionNumber =
      urlSegments.length > 0
        ? +urlSegments[urlSegments.length - 1].path.replace('question', '')
        : 0;
    this.currentProgress =
      this.quizzService.getProgressForQuestion(questionNumber);
  }

  toSorryComponent() {
    this.router.navigate(['/sorry']);
  }
  toQ2() {
    this.router.navigate(['/question2']);
  }
}
