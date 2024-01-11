import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question28',
  templateUrl: './question28.component.html',
  styleUrls: ['./question28.component.css']
})
export class Question28Component {
  constructor( 
    private router: Router,
    private quizzService: QuizzService
    ) {}

    handleResponse(pondere: number) {
 
      this.quizzService.setPondere('factor_alergii', pondere);
      this.router.navigate(['/question29']);

    }
}
