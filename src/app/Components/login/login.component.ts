import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '@app/Models/account';
import { AuthService } from '@app/Services/auth.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  title = 'Login';

  loginForm: FormGroup = new FormGroup({
    email: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required),
    server: new FormControl<string>('', Validators.required),
  });

  save(formData: any) {
    this.authService.login(formData).subscribe({
      next: (res) => {
        console.log(res);
        if (res.accessToken) {
          this.authService.isLoggedIn = true;
          this.authService.accessToken.set(res.accessToken);
          const decodedToken = jwtDecode(this.authService.accessToken()!);
          const stringifiedToken = JSON.stringify(decodedToken);
          localStorage.setItem('accessToken', res.accessToken);
          localStorage.setItem('decodedToken', stringifiedToken);
          this.router.navigate(['/home']);
        }
      },
      error: (err) => {},
    });
  }
}
