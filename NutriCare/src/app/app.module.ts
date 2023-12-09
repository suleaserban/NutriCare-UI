
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './navbar/navbar.component';
import { Question1Component } from './quizz/question1/question1.component';
import { Question2Component } from './quizz/question2/question2.component';
import { SorryComponent } from './quizz/sorry/sorry.component';
import { Question3Component } from './quizz/question3/question3.component';
import { Question4Component } from './quizz/question4/question4.component';
import { Question5Component } from './quizz/question5/question5.component';
import { Question6Component } from './quizz/question6/question6.component';
import { Question7Component } from './quizz/question7/question7.component';
import { Question8Component } from './quizz/question8/question8.component';
import { Question9Component } from './quizz/question9/question9.component';
import { Question10Component } from './quizz/question10/question10.component';
import { Question11Component } from './quizz/question11/question11.component';
import { Question12Component } from './quizz/question12/question12.component';
import { Question13Component } from './quizz/question13/question13.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    Question1Component,
    Question2Component,
    SorryComponent,
    Question3Component,
    Question4Component,
    Question5Component,
    Question6Component,
    Question7Component,
    Question8Component,
    Question9Component,
    Question10Component,
    Question11Component,
    Question12Component,
    Question13Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    PasswordModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
