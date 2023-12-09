import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question10',
  templateUrl: './question10.component.html',
  styleUrls: ['./question10.component.css']
})
export class Question10Component {
  constructor( 
    private router: Router
    ) {}

  toQ11(){
    this.router.navigate(['/question11']); 
     }
   
     toSorryComponent(){
       this.router.navigate(['/sorry']); 
     }
}
