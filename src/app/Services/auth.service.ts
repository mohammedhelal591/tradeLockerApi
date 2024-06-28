import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '@app/Models/account';
import { User } from '@app/Models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  router = inject(Router);
  isLoggedIn: boolean = false;

  accounts = signal<Account[] | []>([], { equal: () => false });
  accessToken = signal<string | null>(null, { equal: () => false });

  constructor() {
    const accessToken = localStorage.getItem('accessToken');
    this.accessToken.set(accessToken);

    if (accessToken) {
      this.isLoggedIn = true;
    }
  }

  login(formData: User): Observable<any> {
    return this.http.post<any>(
      'https://demo.tradelocker.com/backend-api/auth/jwt/token',
      formData
    );
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('decodedToken');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  getAllAcounts(accessToken: string): Observable<any> {
    return this.http.get<any>(
      `https://demo.tradelocker.com/backend-api/auth/jwt/all-accounts`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  }
}
