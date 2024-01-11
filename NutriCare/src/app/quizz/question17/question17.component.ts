import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question17',
  templateUrl: './question17.component.html',
  styleUrls: ['./question17.component.css']
})
export class Question17Component {
  isVegan: boolean = false;
  constructor( 
    private router: Router,
    private quizzService : QuizzService
    ) {
      this.isVegan = this.quizzService.getIsVegan();
    }
    handleResponse(pondere: number) {
      if(!this.isVegan){
      this.quizzService.setPondere('factor_peste', pondere);
      this.router.navigate(['/question18']);
      } else {
        this.quizzService.setPondere('factor_peste_vegan', pondere);
        this.router.navigate(['/question18']);
      }

    }
}
