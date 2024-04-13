import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './components/navbar/navbar.component';
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
import { Question14Component } from './quizz/question14/question14.component';
import { Question15Component } from './quizz/question15/question15.component';
import { Question16Component } from './quizz/question16/question16.component';
import { Question17Component } from './quizz/question17/question17.component';
import { Question18Component } from './quizz/question18/question18.component';
import { Question19Component } from './quizz/question19/question19.component';
import { Question20Component } from './quizz/question20/question20.component';
import { Question21Component } from './quizz/question21/question21.component';
import { Question22Component } from './quizz/question22/question22.component';
import { Question23Component } from './quizz/question23/question23.component';
import { Question24Component } from './quizz/question24/question24.component';
import { Question25Component } from './quizz/question25/question25.component';
import { Question26Component } from './quizz/question26/question26.component';
import { Question27Component } from './quizz/question27/question27.component';
import { Question28Component } from './quizz/question28/question28.component';
import { Question29Component } from './quizz/question29/question29.component';
import { Question30Component } from './quizz/question30/question30.component';
import { Question31Component } from './quizz/question31/question31.component';
import { JwtInterceptor } from './auth.interceptor';
import { MyRecoComponent } from './components/my-reco/my-reco.component';
import { AnalyzingAnswersComponent } from './components/analyzing-answers/analyzing-answers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProductsComponent } from './components/products/products.component';
import { PaginatorModule } from 'primeng/paginator';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartPopUpComponent } from './components/cart-pop-up/cart-pop-up.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { MyAppointmentsComponent } from './components/my-appointments/my-appointments.component';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AddToCartInterceptor } from './http.interceptor';
import { DoctorDashboardComponent } from './components/doctor-components/doctor-dashboard/doctor-dashboard.component';
import { SimplifiedNavbarComponent } from './components/doctor-components/simplified-navbar/simplified-navbar.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminComponentComponent } from './components/admin-component/admin-component.component';
import { TooltipModule } from 'primeng/tooltip';
import { RegisterComponent } from './components/register/register.component';
import { OurDoctorsComponent } from './components/our-doctors/our-doctors.component';
import { FooterComponent } from './components/footer/footer.component';

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
    Question14Component,
    Question15Component,
    Question16Component,
    Question17Component,
    Question18Component,
    Question19Component,
    Question20Component,
    Question21Component,
    Question22Component,
    Question23Component,
    Question24Component,
    Question25Component,
    Question26Component,
    Question27Component,
    Question28Component,
    Question29Component,
    Question30Component,
    Question31Component,
    MyRecoComponent,
    AnalyzingAnswersComponent,
    ProductsComponent,

    CheckoutComponent,
    CartPopUpComponent,
    MyAppointmentsComponent,
    DoctorDashboardComponent,
    SimplifiedNavbarComponent,
    ThankYouComponent,
    MyOrdersComponent,
    AdminComponentComponent,
    RegisterComponent,
    OurDoctorsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    PasswordModule,
    ButtonModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ProgressSpinnerModule,
    PaginatorModule,
    FormsModule,
    RadioButtonModule,
    ProgressBarModule,
    CalendarModule,
    DialogModule,
    ToastModule,
    TooltipModule,
  ],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: AddToCartInterceptor, multi: true },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
