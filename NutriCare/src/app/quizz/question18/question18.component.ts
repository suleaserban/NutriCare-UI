import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question18',
  templateUrl: './question18.component.html',
  styleUrls: ['./question18.component.css']
})
export class Question18Component {
  constructor( 
    private router: Router,
    private quizzService: QuizzService
    ) {}

    handleResponse(pondere: number) {
 
      this.quizzService.setPondere('factor_soare', pondere);
      this.router.navigate(['/question20']);

    }
  
}
