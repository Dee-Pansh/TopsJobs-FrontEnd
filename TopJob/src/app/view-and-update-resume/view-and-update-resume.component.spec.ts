import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAndUpdateResumeComponent } from './view-and-update-resume.component';

describe('ViewAndUpdateResumeComponent', () => {
  let component: ViewAndUpdateResumeComponent;
  let fixture: ComponentFixture<ViewAndUpdateResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAndUpdateResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAndUpdateResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
