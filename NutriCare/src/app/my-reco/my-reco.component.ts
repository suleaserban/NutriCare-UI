import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth service/auth.service';
import { UserScoreService } from '../services/user score service/userScore.service';
import { UserScoreDTO } from '../models/userScoreDTO';

@Component({
  selector: 'app-my-reco',
  templateUrl: './my-reco.component.html',
  styleUrls: ['./my-reco.component.css'],
})
export class MyRecoComponent implements OnInit {
  constructor(private userScoreService: UserScoreService) {}

  ngOnInit(): void {
    let id = localStorage.getItem('id');
    this.userScoreService
      .getTopUserScores(parseInt(id!))
      .subscribe((topScores: UserScoreDTO) => {
        console.log(topScores);
      });
  }
}
