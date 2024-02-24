import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.css'],
})
export class Question4Component {
  inaltime: number | undefined;
  currentProgress?: number;
  showErrorMessage: boolean = false;
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

  toQ5() {
    if (this.inaltime! >= 100 && this.inaltime! <= 300) {
      if (this.quizzService.getIsFemale()) {
        this.router.navigate(['/question5']);
      } else {
        this.router.navigate(['/question6']);
      }
    } else {
      this.showErrorMessage = true;
    }
  }
}
