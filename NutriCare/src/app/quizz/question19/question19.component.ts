import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question19',
  templateUrl: './question19.component.html',
  styleUrls: ['./question19.component.css']
})
export class Question19Component {
  constructor( 
    private router: Router
    ) {}

  toQ20(){
    this.router.navigate(['/question20']); 
     }
}
