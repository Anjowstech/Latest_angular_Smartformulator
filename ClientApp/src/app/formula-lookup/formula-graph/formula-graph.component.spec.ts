import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaGraphComponent } from './formula-graph.component';

describe('FormulaGraphComponent', () => {
  let component: FormulaGraphComponent;
  let fixture: ComponentFixture<FormulaGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
