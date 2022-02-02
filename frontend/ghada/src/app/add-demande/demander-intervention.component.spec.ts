import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanderInterventionComponent } from './demander-intervention.component';

describe('DemanderInterventionComponent', () => {
  let component: DemanderInterventionComponent;
  let fixture: ComponentFixture<DemanderInterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemanderInterventionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemanderInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
