import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question22',
  templateUrl: './question22.component.html',
  styleUrls: ['./question22.component.css'],
})
export class Question22Component {
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
    this.quizzService.setPondere('factor_par_piele_unghii', pondere);
    this.router.navigate(['/question23']);
  }
}
