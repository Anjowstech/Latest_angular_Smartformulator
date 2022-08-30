import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HlbCalculationComponent } from './hlb-calculation.component';

describe('HlbCalculationComponent', () => {
  let component: HlbCalculationComponent;
  let fixture: ComponentFixture<HlbCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HlbCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HlbCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
