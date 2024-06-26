import { Component } from '@angular/core';
import { UserDTO } from '../../models/userDTO';
import { AuthService } from '../../services/auth service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { UserService } from 'src/app/services/user service/user.service';
import { Role } from 'src/app/models/role.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  errorToggle: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    localStorage.removeItem('token');
  }
  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  onLogin(): void {
    const email = this.loginForm.get('email')?.value;
    const parola = this.loginForm.get('password')?.value;

    if (email && parola) {
      const user: UserDTO = { email, parola };

      this.authService.login(user).subscribe(
        (response: any) => {
          localStorage.setItem('token', response.token);
          const decoded: any = jwtDecode(response.token);
          localStorage.setItem('id', decoded.id);
          this.userService
            .getUserRoleById(decoded.id)
            .subscribe((role: Role) => {
              if (role === 'DOCTOR') {
                this.router.navigate(['/doctor-dashboard']);
              }
              if (role === 'ADMIN') {
                this.router.navigate(['/admin-dashboard']);
              }
              return;
            });
          this.router.navigate(['/home']);
        },
        () => {
          this.errorToggle = true;
        }
      );
    }
  }

  toRegister() {
    this.router.navigate(['/register']);
  }
}
