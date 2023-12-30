import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question23',
  templateUrl: './question23.component.html',
  styleUrls: ['./question23.component.css']
})
export class Question23Component {
  constructor( 
    private router: Router
    ) {}

    toQ24(){
    this.router.navigate(['/question24']);    
     }
}
