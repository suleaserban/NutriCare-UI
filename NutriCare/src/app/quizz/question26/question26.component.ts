import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question26',
  templateUrl: './question26.component.html',
  styleUrls: ['./question26.component.css']
})
export class Question26Component {
  constructor( 
    private router: Router
    ) {}

    toQ27(){
    this.router.navigate(['/question27']);    
     }
}
