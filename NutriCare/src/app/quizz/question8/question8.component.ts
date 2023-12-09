import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question8',
  templateUrl: './question8.component.html',
  styleUrls: ['./question8.component.css']
})
export class Question8Component {
  constructor( 
    private router: Router
    ) {}

  toQ9(){
    this.router.navigate(['/question9']); 
     }
   
     toSorryComponent(){
       this.router.navigate(['/sorry']); 
     }
}
