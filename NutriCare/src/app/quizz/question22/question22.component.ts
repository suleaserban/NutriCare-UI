import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question22',
  templateUrl: './question22.component.html',
  styleUrls: ['./question22.component.css']
})
export class Question22Component {
  constructor( 
    private router: Router,
    private quizzService: QuizzService
    ) {}

    handleResponse(pondere: number) {
 
      this.quizzService.setPondere('factor_par_piele_unghii', pondere);
      this.router.navigate(['/question23']);

    }
}
