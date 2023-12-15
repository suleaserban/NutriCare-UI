import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question21',
  templateUrl: './question21.component.html',
  styleUrls: ['./question21.component.css']
})
export class Question21Component {
  constructor( 
    private router: Router
    ) {}

  toQ22(){
    this.router.navigate(['/question22']); 
     }
}
