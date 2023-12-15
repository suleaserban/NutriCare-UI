import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz service/quizz.service';

@Component({
  selector: 'app-question15',
  templateUrl: './question15.component.html',
  styleUrls: ['./question15.component.css']
})
export class Question15Component {
  constructor( 
    private router: Router,
    private quizzService: QuizzService
    ) {}

  toQ16(){
    this.router.navigate(['/question16']); 
     }

     toQ17Vegan(){
      this.quizzService.setIsVegan(true);
      this.router.navigate(['/question17']); 

      //aici tre sa adaugi factor vitamina b12 direct
     }

     toQ16Vegetarian(){
      this.quizzService.setIsVegetarian(true);
      this.router.navigate(['/question16']); 
     }
   
     toSorryComponent(){
       this.router.navigate(['/sorry']); 
     }
}
