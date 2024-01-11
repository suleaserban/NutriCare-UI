import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question19',
  templateUrl: './question19.component.html',
  styleUrls: ['./question19.component.css']
})
export class Question19Component {
  constructor( 
    private router: Router,
    private quizzService: QuizzService
    ) {}

    handleResponse(pondere: number) {
 
      this.quizzService.setPondere('factor_glicemic', pondere);
      this.router.navigate(['/question20']);

    }
}
