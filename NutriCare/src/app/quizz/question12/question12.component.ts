import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question12',
  templateUrl: './question12.component.html',
  styleUrls: ['./question12.component.css']
})
export class Question12Component {
  constructor( 
    private router: Router
    ) {}

  toQ13(){
    this.router.navigate(['/question13']); 
     }
   
     toSorryComponent(){
       this.router.navigate(['/sorry']); 
     }
}
