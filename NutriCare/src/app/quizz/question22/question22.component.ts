import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question22',
  templateUrl: './question22.component.html',
  styleUrls: ['./question22.component.css']
})
export class Question22Component {
  constructor( 
    private router: Router
    ) {}

  toQ23(){
    this.router.navigate(['/question23']); 
     }
}
