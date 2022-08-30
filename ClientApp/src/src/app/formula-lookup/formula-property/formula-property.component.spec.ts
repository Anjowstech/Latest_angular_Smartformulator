import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaPropertyComponent } from './formula-property.component';

describe('FormulaPropertyComponent', () => {
  let component: FormulaPropertyComponent;
  let fixture: ComponentFixture<FormulaPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
