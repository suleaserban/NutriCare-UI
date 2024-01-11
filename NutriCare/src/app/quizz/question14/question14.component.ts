import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question14',
  templateUrl: './question14.component.html',
  styleUrls: ['./question14.component.css']
})
export class Question14Component {
  constructor( 
    private router: Router,
    private quizzService: QuizzService
    ) {}

    handleResponse(pondere: number) {
 
      this.quizzService.setPondere('factor_fitness', pondere);
      this.router.navigate(['/question15']);
    }
}

