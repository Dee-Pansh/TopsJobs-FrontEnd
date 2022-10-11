import { TestBed } from '@angular/core/testing';

import { EmployerSignUpService } from './employer-sign-up.service';

describe('EmployerSignUpService', () => {
  let service: EmployerSignUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployerSignUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
