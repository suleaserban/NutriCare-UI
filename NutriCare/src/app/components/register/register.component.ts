import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth service/auth.service';
import { UserService } from 'src/app/services/user service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registrationForm = new FormGroup({
    nume: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
    ]),
    prenume: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
    ]),
    parola: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
    varsta: new FormControl('', [
      Validators.required,
      Validators.min(18),
      Validators.max(99),
      Validators.pattern(/^\d+$/),
    ]),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  onRegister(): void {
    if (this.registrationForm.valid) {
      this.authService.register(this.registrationForm.value).subscribe(() => {
        this.router.navigate(['/login']);
      });
    }
  }

  backToLogin() {
    this.router.navigate(['/login']);
  }
}
