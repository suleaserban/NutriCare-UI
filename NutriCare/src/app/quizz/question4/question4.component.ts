import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.css']
})
export class Question4Component {
  constructor( 
    private router: Router,
    private quizzService: QuizzService
    ) {}
toQ5(){
  if(this.quizzService.getIsFemale()){
    this.router.navigate(['/question5']);
  } else{
    this.router.navigate(['/question6']);
  }
}
}
