import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question16',
  templateUrl: './question16.component.html',
  styleUrls: ['./question16.component.css']
})
export class Question16Component {
  constructor( 
    private router: Router,
    private quizzService: QuizzService
    ) {}

    handleResponse(pondere: number) {
 
      this.quizzService.setPondere('factor_vitb', pondere);
      this.router.navigate(['/question17']);
      console.log(this.quizzService.getFinalPonderiDto());
    }
  

}
