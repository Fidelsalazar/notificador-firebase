import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardianPlannerComponent } from './guardian-planner.component';

describe('GuardianPlannerComponent', () => {
  let component: GuardianPlannerComponent;
  let fixture: ComponentFixture<GuardianPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardianPlannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuardianPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
