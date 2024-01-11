import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question13',
  templateUrl: './question13.component.html',
  styleUrls: ['./question13.component.css']
})
export class Question13Component {
  constructor( 
    private router: Router,
    private quizzService: QuizzService
    ) {}

    handleResponse(pondere: number) {
 
      this.quizzService.setPondere('factor_stres', pondere);
      this.router.navigate(['/question14']);
    }
}
