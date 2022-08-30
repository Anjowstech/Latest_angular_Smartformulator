import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaInstructionComponent } from './formula-instruction.component';

describe('FormulaInstructionComponent', () => {
  let component: FormulaInstructionComponent;
  let fixture: ComponentFixture<FormulaInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
