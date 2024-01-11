import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question11',
  templateUrl: './question11.component.html',
  styleUrls: ['./question11.component.css']
})
export class Question11Component {
  constructor( 
    private router: Router,
    private quizzService: QuizzService
    ) {}
    handleResponse(pondere: number) {
 
      this.quizzService.setPondere('factor_energie', pondere);
      this.router.navigate(['/question12']);
    }
    
}
