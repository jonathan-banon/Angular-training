import { TestBed } from '@angular/core/testing';

import { RequestTimerService } from './request-timer.service';

describe('RequestTimerService', () => {
  let service: RequestTimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestTimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
