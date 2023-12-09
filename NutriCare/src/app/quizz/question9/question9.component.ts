import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question9',
  templateUrl: './question9.component.html',
  styleUrls: ['./question9.component.css']
})
export class Question9Component {
  constructor( 
    private router: Router
    ) {}

  toQ10(){
    this.router.navigate(['/question10']); 
     }
   
     toSorryComponent(){
       this.router.navigate(['/sorry']); 
     }
}
