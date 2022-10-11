import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupJobseekerComponent } from './signup-jobseeker.component';

describe('SignupJobseekerComponent', () => {
  let component: SignupJobseekerComponent;
  let fixture: ComponentFixture<SignupJobseekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupJobseekerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupJobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
