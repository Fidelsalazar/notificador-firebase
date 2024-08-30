import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRefactorComponent } from './login-refactor.component';

describe('LoginRefactorComponent', () => {
  let component: LoginRefactorComponent;
  let fixture: ComponentFixture<LoginRefactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginRefactorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginRefactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
