import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaRestrictionComponent } from './formula-restriction.component';

describe('FormulaRestrictionComponent', () => {
  let component: FormulaRestrictionComponent;
  let fixture: ComponentFixture<FormulaRestrictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaRestrictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaRestrictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
