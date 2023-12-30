import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question24',
  templateUrl: './question24.component.html',
  styleUrls: ['./question24.component.css']
})
export class Question24Component {
  constructor( 
    private router: Router
    ) {}

    toQ25(){
    this.router.navigate(['/question25']);    
     }
}
