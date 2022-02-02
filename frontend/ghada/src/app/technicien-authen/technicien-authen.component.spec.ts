import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicienAuthenComponent } from './technicien-authen.component';

describe('TechnicienAuthenComponent', () => {
  let component: TechnicienAuthenComponent;
  let fixture: ComponentFixture<TechnicienAuthenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicienAuthenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicienAuthenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
