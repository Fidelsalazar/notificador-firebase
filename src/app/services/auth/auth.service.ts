import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, forwardRef } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../config';
import { AuthGuard } from '../../core/guards/auth/auth.guard';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword, Auth } from 'firebase/auth';
import { auth } from '../../app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    console.log(`${environment.apiUrl}/auth/login`);
    return this.http
      .post(`${environment.apiUrl}/auth/login`, { username, password })
      .pipe(
        tap(() => {
          this.loggedIn.next(true);
          this.router.navigate(['/dashboard']);
        })
      );
  }

  register(username: string, password: string): Observable<any> {
    const user = { username, password };
    return this.http.post(`${environment.apiUrl}/auth/register`, user);
  }

  isLoggedIn() {
    console.log(this.loggedIn);
    return this.loggedIn.asObservable();
  }

  logout() {
    // Lógica de cierre de sesión
    this.setLoggedIn(false);
    this.router.navigate(['/']);
  }

  setLoggedIn(value: boolean) {
    this.loggedIn.next(value);
  }
}
