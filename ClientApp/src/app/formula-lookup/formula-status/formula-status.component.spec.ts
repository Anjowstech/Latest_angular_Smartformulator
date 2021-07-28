import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaStatusComponent } from './formula-status.component';

describe('FormulaStatusComponent', () => {
  let component: FormulaStatusComponent;
  let fixture: ComponentFixture<FormulaStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
