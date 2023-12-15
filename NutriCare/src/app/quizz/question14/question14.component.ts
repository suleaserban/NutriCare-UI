import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question14',
  templateUrl: './question14.component.html',
  styleUrls: ['./question14.component.css']
})
export class Question14Component {
  constructor( 
    private router: Router
    ) {}

  toQ15(){
    this.router.navigate(['/question15']); 
     }
   
     toSorryComponent(){
       this.router.navigate(['/sorry']); 
     }
}
