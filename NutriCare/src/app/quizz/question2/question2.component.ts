import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component {
  constructor( 
    private router: Router,
    private quizzService: QuizzService
    ) {}

  toQ3B(){
     this.router.navigate(['/question3']); 
     this.quizzService.setIsFemale(false);
     this.quizzService.setCurrentQuestionIndex(3);
  }
  
  toQ3F(){
    this.router.navigate(['/question3']); 
    this.quizzService.setIsFemale(true);
    this.quizzService.setCurrentQuestionIndex(3);
 }
}
