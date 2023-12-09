import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question7',
  templateUrl: './question7.component.html',
  styleUrls: ['./question7.component.css']
})
export class Question7Component {
  constructor( 
    private router: Router
    ) {}

  toQ8(){
    this.router.navigate(['/question8']); 
     }
   
     toSorryComponent(){
       this.router.navigate(['/sorry']); 
     }
   

}
