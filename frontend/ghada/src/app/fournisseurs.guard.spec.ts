import { TestBed } from '@angular/core/testing';

import { FournisseursGuard } from './fournisseurs.guard';

describe('FournisseursGuard', () => {
  let guard: FournisseursGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FournisseursGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
