import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question29',
  templateUrl: './question29.component.html',
  styleUrls: ['./question29.component.css'],
})
export class Question29Component {
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

  handleResponse(pondere: number) {
    this.quizzService.setPondere('factor_omega3', pondere);
    this.router.navigate(['/question30']);
  }
}
