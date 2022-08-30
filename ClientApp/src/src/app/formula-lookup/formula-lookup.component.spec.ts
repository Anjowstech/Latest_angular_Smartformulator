import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaLookupComponent } from './formula-lookup.component';

describe('FormulaLookupComponent', () => {
  let component: FormulaLookupComponent;
  let fixture: ComponentFixture<FormulaLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
