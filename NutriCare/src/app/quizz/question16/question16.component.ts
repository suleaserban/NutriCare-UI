import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question16',
  templateUrl: './question16.component.html',
  styleUrls: ['./question16.component.css']
})
export class Question16Component {
  constructor( 
    private router: Router
    ) {}

  toQ17(){
    this.router.navigate(['/question17']); 
     }
  

}
