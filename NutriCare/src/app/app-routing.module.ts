import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth.guard';
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
import { MyRecoComponent } from './components/my-reco/my-reco.component';
import { AnalyzingAnswersComponent } from './components/analyzing-answers/analyzing-answers.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'question1',
    component: Question1Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question2',
    component: Question2Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question3',
    component: Question3Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question4',
    component: Question4Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question5',
    component: Question5Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question6',
    component: Question6Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question7',
    component: Question7Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question8',
    component: Question8Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question9',
    component: Question9Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question10',
    component: Question10Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question11',
    component: Question11Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question12',
    component: Question12Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question13',
    component: Question13Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question14',
    component: Question14Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question15',
    component: Question15Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question16',
    component: Question16Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question17',
    component: Question17Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question18',
    component: Question18Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question19',
    component: Question19Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question20',
    component: Question20Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question21',
    component: Question21Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question22',
    component: Question22Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question23',
    component: Question23Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question24',
    component: Question24Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question25',
    component: Question25Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question26',
    component: Question26Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question27',
    component: Question27Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question28',
    component: Question28Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question29',
    component: Question29Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question30',
    component: Question30Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'question31',
    component: Question31Component,
    canActivate: [AuthGuard],
  },
  { path: 'sorry', component: SorryComponent, canActivate: [AuthGuard] },
  { path: 'my-reco', component: MyRecoComponent, canActivate: [AuthGuard] },
  {
    path: 'analyzing-answers',
    component: AnalyzingAnswersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
