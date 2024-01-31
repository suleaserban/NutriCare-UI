import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css'],
})
export class Question3Component {
  greutate: number | undefined;
  showErrorMessage = false;
  constructor(private router: Router) {}
  toQ4() {
    if (!this.greutate || this.greutate > 200) {
      this.showErrorMessage = true;
    } else {
      this.router.navigate(['/question4']);
    }
  }
}
