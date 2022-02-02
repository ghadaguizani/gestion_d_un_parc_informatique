import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmgComponent } from './immg.component';

describe('ImmgComponent', () => {
  let component: ImmgComponent;
  let fixture: ComponentFixture<ImmgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
