import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question15',
  templateUrl: './question15.component.html',
  styleUrls: ['./question15.component.css'],
})
export class Question15Component {
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

  toQ16() {
    this.router.navigate(['/question16']);
  }

  toQ17Vegan() {
    this.quizzService.setIsVegan(true);
    this.router.navigate(['/question17']);

    //aici tre sa adaugi factor vitamina b12 direct
  }

  toQ16Vegetarian() {
    this.quizzService.setIsVegetarian(true);
    this.router.navigate(['/question16']);
  }

  toSorryComponent() {
    this.router.navigate(['/sorry']);
  }
}
