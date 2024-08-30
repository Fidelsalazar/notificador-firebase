import { TestBed } from '@angular/core/testing';
import { FirebaseService } from './firebase.service';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BehaviorSubject } from 'rxjs';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const mockAuth = {
  signInWithEmailAndPassword: jasmine.createSpy('signInWithEmailAndPassword').and.returnValue(Promise.resolve({
    user: { email: 'test@example.com' }
  })),
  createUserWithEmailAndPassword: jasmine.createSpy('createUserWithEmailAndPassword').and.returnValue(Promise.resolve({
    user: { email: 'test@example.com' }
  }))
};

describe('FirebaseService', () => {
  let service: FirebaseService;
  let router: Router;

  beforeEach(() => {
    const mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        FirebaseService,
        { provide: Router, useValue: mockRouter },
        { provide: getAuth, useValue: mockAuth }
      ]
    });

    service = TestBed.inject(FirebaseService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log in a user', async () => {
    await service.login('test@example.com', 'password');

    expect(mockAuth.signInWithEmailAndPassword).toHaveBeenCalledWith(service['auth'], 'test@example.com', 'password');
    
    service.isLoggedIn().subscribe(isLoggedIn => {
      expect(isLoggedIn).toBe(true);
    });
  });

  it('should register a user', async () => {
    await service.register('test@example.com', 'password');

    expect(mockAuth.createUserWithEmailAndPassword).toHaveBeenCalledWith(service['auth'], 'test@example.com', 'password');
    
    service.isLoggedIn().subscribe(isLoggedIn => {
      expect(isLoggedIn).toBe(true);
    });
  });

  it('should log out a user', () => {
    service.logout();

    service.isLoggedIn().subscribe(isLoggedIn => {
      expect(isLoggedIn).toBe(false);
    });

    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });
});

