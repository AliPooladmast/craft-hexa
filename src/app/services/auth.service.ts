import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  login(credentials: any) {
    return this.http.post('https://dummyjson.com/auth/login', credentials).pipe(
      map((res: any) => {
        if (res && res.token) {
          localStorage.setItem('token', res.token);
          return true;
        }
        return false;
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return !this.jwtHelper.isTokenExpired();
  }

  get currentUser() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    return this.jwtHelper.decodeToken(token);
  }
}
