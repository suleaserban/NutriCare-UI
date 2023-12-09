import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question6',
  templateUrl: './question6.component.html',
  styleUrls: ['./question6.component.css']
})
export class Question6Component {
  constructor( 
    private router: Router
    ) {}

  toQ7(){
 this.router.navigate(['/question7']); 
  }

  toSorryComponent(){
    this.router.navigate(['/sorry']); 
  }

}
