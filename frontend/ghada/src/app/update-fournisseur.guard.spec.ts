import { TestBed } from '@angular/core/testing';

import { UpdateFournisseurGuard } from './update-fournisseur.guard';

describe('UpdateFournisseurGuard', () => {
  let guard: UpdateFournisseurGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UpdateFournisseurGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
