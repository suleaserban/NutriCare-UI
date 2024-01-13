import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question23',
  templateUrl: './question23.component.html',
  styleUrls: ['./question23.component.css']
})
export class Question23Component {
  constructor( 
    private router: Router,
    private quizzService: QuizzService
    ) {}

    handleResponse(pondere: number) {
 
      this.quizzService.setPondere('factor_par_piele_unghii', pondere);
      this.router.navigate(['/question24']);
      console.log(this.quizzService.getFinalPonderiDto());
    }
}
