import { TestBed } from '@angular/core/testing';

import { UpdateAdminGuard } from './update-admin.guard';

describe('UpdateAdminGuard', () => {
  let guard: UpdateAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UpdateAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
