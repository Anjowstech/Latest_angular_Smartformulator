import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaListStatusComponent } from './formula-status.component';

describe('FormulaListStatusComponent', () => {
  let component: FormulaListStatusComponent;
  let fixture: ComponentFixture<FormulaListStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaListStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaListStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
