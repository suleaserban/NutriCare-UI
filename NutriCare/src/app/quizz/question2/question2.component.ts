import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css'],
})
export class Question2Component {
  currentProgress?: number;
  constructor(
    private router: Router,
    private quizzService: QuizzService,
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

  toQ3B() {
    this.router.navigate(['/question3']);
    this.quizzService.setIsFemale(false);
    this.quizzService.setCurrentQuestionIndex(3);
  }

  toQ3F() {
    this.router.navigate(['/question3']);
    this.quizzService.setIsFemale(true);
    this.quizzService.setCurrentQuestionIndex(3);
  }
}
