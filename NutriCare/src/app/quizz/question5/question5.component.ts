import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.css']
})
export class Question5Component {
  constructor( 
    private router: Router
    ) {}

  toQ6(){
    this.router.navigate(['/question6']);
  }

  toSorryComponent(){
    this.router.navigate(['/sorry']); 
  }

}
