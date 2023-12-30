import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question28',
  templateUrl: './question28.component.html',
  styleUrls: ['./question28.component.css']
})
export class Question28Component {
  constructor( 
    private router: Router
    ) {}

    toQ29(){
    this.router.navigate(['/question29']);    
     }
}
