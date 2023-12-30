import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question27',
  templateUrl: './question27.component.html',
  styleUrls: ['./question27.component.css']
})
export class Question27Component {
  constructor( 
    private router: Router
    ) {}

    toQ28(){
    this.router.navigate(['/question28']);    
     }
}
