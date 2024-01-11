import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question26',
  templateUrl: './question26.component.html',
  styleUrls: ['./question26.component.css']
})
export class Question26Component {
  constructor( 
    private router: Router,
    private quizzService: QuizzService
    ) {}

    handleResponse(pondere: number) {
 
      this.quizzService.setPondere('factor_creier', pondere);
      this.router.navigate(['/question27']);

    }
}
