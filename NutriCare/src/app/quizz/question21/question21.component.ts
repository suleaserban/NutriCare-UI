import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question21',
  templateUrl: './question21.component.html',
  styleUrls: ['./question21.component.css']
})
export class Question21Component {
  constructor( 
    private router: Router,
    private quizzService: QuizzService
    ) {}

    handleResponse(pondere: number) {
 
      this.quizzService.setPondere('factor_probiotice', pondere);
      this.router.navigate(['/question22']);

    }
}
