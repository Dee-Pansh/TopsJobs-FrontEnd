import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsdashComponent } from './jsdash.component';

describe('JsdashComponent', () => {
  let component: JsdashComponent;
  let fixture: ComponentFixture<JsdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
