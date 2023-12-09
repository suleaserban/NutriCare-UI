import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component {
  constructor( private router: Router,private quizzService:QuizzService) {}

  toSorryComponent(){
    this.router.navigate(['/sorry']); 
  }
  toQ2(){
    this.quizzService.setCurrentQuestionIndex(2);
      this.router.navigate(['/question2']); 

  }

}
