import { TestBed } from '@angular/core/testing';

import { MaterielsGuard } from './materiels.guard';

describe('MaterielsGuard', () => {
  let guard: MaterielsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MaterielsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
