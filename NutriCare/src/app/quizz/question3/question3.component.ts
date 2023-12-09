import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component {
  constructor( private router: Router) {}
  toQ4(){
    this.router.navigate(['/question4']); 
    
  }
}
