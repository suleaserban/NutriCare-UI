import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { Question1Component } from './quizz/question1/question1.component';
import { Question2Component } from './quizz/question2/question2.component';
import { SorryComponent } from './quizz/sorry/sorry.component';
import { Question3Component } from './quizz/question3/question3.component';
import { Question4Component } from './quizz/question4/question4.component';
import { Question5Component } from './quizz/question5/question5.component';
import { Question6Component } from './quizz/question6/question6.component';
import { Question7Component } from './quizz/question7/question7.component';
import { QuizzProgressGuard } from './quizz-progress-guard';
import { Question8Component } from './quizz/question8/question8.component';
import { Question9Component } from './quizz/question9/question9.component';
import { Question10Component } from './quizz/question10/question10.component';
import { Question11Component } from './quizz/question11/question11.component';
import { Question12Component } from './quizz/question12/question12.component';
import { Question13Component } from './quizz/question13/question13.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'question1', component: Question1Component, canActivate: [AuthGuard] },
  { path: 'question2', component: Question2Component, canActivate: [AuthGuard] },
  { path: 'question3', component: Question3Component, canActivate: [AuthGuard] },
  { path: 'question4', component: Question4Component, canActivate: [AuthGuard] },
  { path: 'question5', component: Question5Component, canActivate: [AuthGuard] },
  { path: 'question6', component: Question6Component, canActivate: [AuthGuard] },
  { path: 'question7', component: Question7Component, canActivate: [AuthGuard] },
  { path: 'question8', component: Question8Component, canActivate: [AuthGuard] },
  { path: 'question9', component: Question9Component, canActivate: [AuthGuard] },
  { path: 'question10', component: Question10Component, canActivate: [AuthGuard] },
  { path: 'question11', component: Question11Component, canActivate: [AuthGuard] },
  { path: 'question12', component: Question12Component, canActivate: [AuthGuard] },
  { path: 'question13', component: Question13Component, canActivate: [AuthGuard] },
  { path: 'sorry', component: SorryComponent, canActivate: [AuthGuard] },

  { path: '', redirectTo: 'login', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
