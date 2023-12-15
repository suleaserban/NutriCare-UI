import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question20',
  templateUrl: './question20.component.html',
  styleUrls: ['./question20.component.css']
})
export class Question20Component {
  constructor( 
    private router: Router
    ) {}

  toQ21(){
    this.router.navigate(['/question21']); 
     }
}
