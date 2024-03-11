import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simplified-navbar',
  templateUrl: './simplified-navbar.component.html',
  styleUrls: ['./simplified-navbar.component.css'],
})
export class SimplifiedNavbarComponent {
  isAccountDropdownVisible = false;
  isDropdownOpen = false;

  constructor(private router: Router) {}

  toggleAccountDropdown() {
    this.isAccountDropdownVisible = !this.isAccountDropdownVisible;
  }

  signOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.toggleAccountDropdown();
  }
}
