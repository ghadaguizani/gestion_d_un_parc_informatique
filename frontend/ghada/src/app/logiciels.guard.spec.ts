import { TestBed } from '@angular/core/testing';

import { LogicielsGuard } from './logiciels.guard';

describe('LogicielsGuard', () => {
  let guard: LogicielsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogicielsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
