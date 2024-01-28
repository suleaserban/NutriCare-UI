import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { QuizzService } from '../../services/quizz service/quizz.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isAccountDropdownVisible = false;
  currentUrl: string | undefined;
  constructor(private router: Router, private quizzService: QuizzService) {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event) => {
        this.currentUrl = event.url;
      });
  }

  toQuizz() {
    this.quizzService.setCurrentQuestionIndex(1);
    this.router.navigate(['/question1']);
  }

  toggleAccountDropdown() {
    this.isAccountDropdownVisible = !this.isAccountDropdownVisible;
  }

  signOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.toggleAccountDropdown();
  }

  redirectToShoppingCart() {
    this.router.navigate(['/shopping-cart']);
  }
}
