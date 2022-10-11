import { TestBed } from '@angular/core/testing';

import { JsempdashService } from './jsempdash.service';

describe('JsempdashService', () => {
  let service: JsempdashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsempdashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
