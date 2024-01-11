import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question30',
  templateUrl: './question30.component.html',
  styleUrls: ['./question30.component.css']
})
export class Question30Component {
  constructor( 
    private router: Router,
    private quizzService: QuizzService
    ) {}

    handleResponse(pondere: number) {
 
      this.quizzService.setPondere('factor_magneziu', pondere);
      this.router.navigate(['/question31']);

    }
}
