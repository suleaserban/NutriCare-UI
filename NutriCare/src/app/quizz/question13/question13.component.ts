import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question13',
  templateUrl: './question13.component.html',
  styleUrls: ['./question13.component.css']
})
export class Question13Component {
  constructor( 
    private router: Router
    ) {}

  toQ14(){
    this.router.navigate(['/question14']); 
     }
   
     toSorryComponent(){
       this.router.navigate(['/sorry']); 
     }
}
