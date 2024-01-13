import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question12',
  templateUrl: './question12.component.html',
  styleUrls: ['./question12.component.css']
})
export class Question12Component {
  constructor( 
    private router: Router,
    private quizzService: QuizzService
    ) {}

    handleResponse(pondere: number) {
 
      this.quizzService.setPondere('factor_somn', pondere);
      this.router.navigate(['/question13']);
      console.log(this.quizzService.getFinalPonderiDto());
    }
}
