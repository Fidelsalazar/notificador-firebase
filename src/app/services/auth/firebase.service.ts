// src/app/firebase.service.ts

import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import { environment } from '../../../environments/enviroment';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private firebaseApp = initializeApp(environment.firebaseConfig);
  private auth = getAuth(this.firebaseApp);
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient, 
    private router: Router
  ) {}


  async login(email: string, password: string): Promise<void> {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      console.log('User logged in:', userCredential.user);
    } catch (error) {
      console.error('Error logging in:', error);
      throw new Error('Login failed');
    }
  }

  async register(email: string, password: string): Promise<void> {
    try {
      const response = await this.http.post<{ message: string } | undefined>(`${environment.apiBaseUrl}auth/register`, { email, password }).toPromise();

      if (response && response.message) {
        console.log('Registration response:', response.message);
        this.setLoggedIn(true);
      } else {
        console.error('Registration response is undefined or message is missing.');
        throw new Error('Registration failed');
      }
    } catch (error) {
      console.error('Error registering:', error);
      throw new Error('Registration failed');
    }
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
