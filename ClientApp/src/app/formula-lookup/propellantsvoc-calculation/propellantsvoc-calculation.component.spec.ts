import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropellantsvocCalculationComponent } from './propellantsvoc-calculation.component';

describe('PropellantsvocCalculationComponent', () => {
  let component: PropellantsvocCalculationComponent;
  let fixture: ComponentFixture<PropellantsvocCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropellantsvocCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropellantsvocCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
