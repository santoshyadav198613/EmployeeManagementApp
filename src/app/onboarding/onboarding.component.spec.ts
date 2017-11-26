import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormArray } from '@angular/forms';
import { OnboardingComponent } from './onboarding.component';

import { SharedModule } from '../shared/shared.module';

describe('OnboardingComponent', () => {
  let component: OnboardingComponent;
  let fixture: ComponentFixture<OnboardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingComponent ],
      imports : [ SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should add employee object ', () => {
    component.addEmployer();
    fixture.detectChanges();
    const pastExp = component.oboardingForm.controls['pastExp'] as FormArray;
    expect(pastExp.length).toBe(2);
  });

  it('should add remove a row from employee object ', () => {
    component.removeEmployer(0);
    fixture.detectChanges();
    const pastExp = component.oboardingForm.controls['pastExp'] as FormArray;
    expect(pastExp.length).toBe(0);
  });
});
