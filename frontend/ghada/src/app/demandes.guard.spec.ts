import { TestBed } from '@angular/core/testing';

import { DemandesGuard } from './demandes.guard';

describe('DemandesGuard', () => {
  let guard: DemandesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DemandesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
