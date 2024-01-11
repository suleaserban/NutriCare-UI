import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question29',
  templateUrl: './question29.component.html',
  styleUrls: ['./question29.component.css']
})
export class Question29Component {
  constructor( 
    private router: Router,
    private quizzService: QuizzService
    ) {}

    handleResponse(pondere: number) {
 
      this.quizzService.setPondere('factor_stres', pondere);
      this.router.navigate(['/question30']);

    }
}
