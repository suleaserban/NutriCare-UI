import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question8',
  templateUrl: './question8.component.html',
  styleUrls: ['./question8.component.css'],
})
export class Question8Component {
  currentProgress?: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private quizzService: QuizzService
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

  toQ9() {
    this.router.navigate(['/question9']);
  }

  toSorryComponent() {
    this.router.navigate(['/sorry']);
  }
}
