import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question27',
  templateUrl: './question27.component.html',
  styleUrls: ['./question27.component.css']
})
export class Question27Component {
  constructor( 
    private router: Router,
    private quizzService: QuizzService
    ) {}

    handleResponse(pondere: number) {
 
      this.quizzService.setPondere('factor_imunitate', pondere);
      this.router.navigate(['/question28']);

    }
}
