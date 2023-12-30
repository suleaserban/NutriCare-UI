import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question25',
  templateUrl: './question25.component.html',
  styleUrls: ['./question25.component.css']
})
export class Question25Component {
  constructor( 
    private router: Router
    ) {}

    toQ26(){
    this.router.navigate(['/question26']);    
     }
}
