import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from '../../services/quizz service/quizz.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router, private quizzService: QuizzService) {}

  toQuizz() {
    this.quizzService.setCurrentQuestionIndex(1);
    this.router.navigate(['/question1']);
  }
}
