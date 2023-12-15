import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question18',
  templateUrl: './question18.component.html',
  styleUrls: ['./question18.component.css']
})
export class Question18Component {
  constructor( 
    private router: Router
    ) {}

  toQ19(){
    this.router.navigate(['/question19']); 
     }
  
}
