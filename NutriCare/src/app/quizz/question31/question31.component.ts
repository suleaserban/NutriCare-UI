import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question31',
  templateUrl: './question31.component.html',
  styleUrls: ['./question31.component.css']
})
export class Question31Component {
  constructor( 
    private router: Router,
    private quizzService: QuizzService
    ) {}

    handleResponse(pondere: number) {
 
      this.quizzService.setPondere('factor_fier', pondere);
      this.router.navigate(['/question30']);

    }
}
