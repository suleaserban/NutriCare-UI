import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { QuizzService } from './services/quizz service/quizz.service';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class QuizzProgressGuard implements CanActivate {
  
  constructor(private quizzService: QuizzService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    console.log('Attempting to activate route:', next.url);

    const currentQuestionIndex = this.quizzService.getCurrentQuestionIndex();
    console.log('Current question index from service:', currentQuestionIndex);

    if (next.url.length > 1 && next.url[1] && next.url[1].path.startsWith('question')) {
      const nextQuestionIndex = parseInt(next.url[1].path.replace('question', ''), 10);
      console.log('Next question index from URL:', nextQuestionIndex);

      if (!isNaN(nextQuestionIndex) && this.quizzService.canAccessQuestion(nextQuestionIndex)) {
        console.log('Access to the question is granted');
        return true;
      } else {
        console.log('Access to the question is denied, redirecting to the last accessible question');
        return this.router.createUrlTree(['/question' + currentQuestionIndex]);
      }
    } else {
      console.log('URL is not a question route, redirecting to the default route');
      return this.router.createUrlTree(['/']); // Aici e bine să te gândești dacă vrei să redirecționezi la home, login sau o altă rută
    }
  }
}
