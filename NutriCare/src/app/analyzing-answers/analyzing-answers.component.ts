import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analyzing-answers',
  templateUrl: './analyzing-answers.component.html',
  styleUrls: ['./analyzing-answers.component.css'],
})
export class AnalyzingAnswersComponent implements OnInit {
  isAnalysisComplete = false;
  spinnerColor = 'primary';

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isAnalysisComplete = true;
    }, 5000);
  }

  goToRecommendations() {
    this.router.navigate(['/my-reco']);
  }
}
