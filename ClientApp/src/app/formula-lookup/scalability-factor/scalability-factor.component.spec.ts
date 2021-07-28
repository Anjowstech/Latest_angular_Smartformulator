import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalabilityFactorComponent } from './scalability-factor.component';

describe('ScalabilityFactorComponent', () => {
  let component: ScalabilityFactorComponent;
  let fixture: ComponentFixture<ScalabilityFactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScalabilityFactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalabilityFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
