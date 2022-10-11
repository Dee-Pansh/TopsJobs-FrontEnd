import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginJobseekerComponent } from './login-jobseeker.component';

describe('LoginJobseekerComponent', () => {
  let component: LoginJobseekerComponent;
  let fixture: ComponentFixture<LoginJobseekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginJobseekerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginJobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
