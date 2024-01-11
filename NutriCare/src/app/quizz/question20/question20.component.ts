import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question20',
  templateUrl: './question20.component.html',
  styleUrls: ['./question20.component.css']
})
export class Question20Component {
  constructor( 
    private router: Router,
    private quizzService: QuizzService
    ) {}

    handleResponse(pondere: number) {
 
      this.quizzService.setPondere('factor_ficat', pondere);
      this.router.navigate(['/question21']);

    }
}
