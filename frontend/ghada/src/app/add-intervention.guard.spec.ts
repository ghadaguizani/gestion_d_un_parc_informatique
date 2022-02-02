import { TestBed } from '@angular/core/testing';

import { AddInterventionGuard } from './add-intervention.guard';

describe('AddInterventionGuard', () => {
  let guard: AddInterventionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AddInterventionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
