
import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  ngOnInit(){

  }
  constructor(private authService: AuthService, private router: Router) {}


  onLogin(): void {

    const email = this.loginForm.get('email')?.value;
    const parola = this.loginForm.get('password')?.value;

    if (email && parola) {
      const user: User = { email, parola }; 

      this.authService.login(user).subscribe(
        (  response: any) => {
          console.log(response);
          localStorage.setItem('token', response.token); 
          this.router.navigate(['/home']); 
        },
        () => {
      
        }
      );
    }
  }
}
