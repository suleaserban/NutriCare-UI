import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question17',
  templateUrl: './question17.component.html',
  styleUrls: ['./question17.component.css'],
})
export class Question17Component {
  currentProgress?: number;
  isVegan: boolean = false;
  constructor(
    private router: Router,
    private quizzService: QuizzService,
    private route: ActivatedRoute
  ) {
    this.isVegan = this.quizzService.getIsVegan();
  }

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
    if (!this.isVegan) {
      this.quizzService.setPondere('factor_peste', pondere);
      this.router.navigate(['/question18']);
    } else {
      this.quizzService.setPondere('factor_peste_vegan', pondere);
      this.router.navigate(['/question18']);
    }
  }
}
