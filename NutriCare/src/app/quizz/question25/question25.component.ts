import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question25',
  templateUrl: './question25.component.html',
  styleUrls: ['./question25.component.css']
})
export class Question25Component {
  constructor( 
    private router: Router,
    private quizzService: QuizzService
    ) {}

    handleResponse(pondere: number) {
 
      this.quizzService.setPondere('factor_digestie', pondere);
      this.router.navigate(['/question26']);

    }
}
