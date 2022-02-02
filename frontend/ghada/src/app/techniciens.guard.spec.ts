import { TestBed } from '@angular/core/testing';

import { TechniciensGuard } from './techniciens.guard';

describe('TechniciensGuard', () => {
  let guard: TechniciensGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TechniciensGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
