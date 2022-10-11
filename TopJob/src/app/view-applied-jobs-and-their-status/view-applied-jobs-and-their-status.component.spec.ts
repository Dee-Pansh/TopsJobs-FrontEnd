import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppliedJobsAndTheirStatusComponent } from './view-applied-jobs-and-their-status.component';

describe('ViewAppliedJobsAndTheirStatusComponent', () => {
  let component: ViewAppliedJobsAndTheirStatusComponent;
  let fixture: ComponentFixture<ViewAppliedJobsAndTheirStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppliedJobsAndTheirStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppliedJobsAndTheirStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
