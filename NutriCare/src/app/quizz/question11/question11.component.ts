import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question11',
  templateUrl: './question11.component.html',
  styleUrls: ['./question11.component.css']
})
export class Question11Component {
  constructor( 
    private router: Router
    ) {}

  toQ12(){
    this.router.navigate(['/question12']); 
     }
   
     toSorryComponent(){
       this.router.navigate(['/sorry']); 
     }
}
