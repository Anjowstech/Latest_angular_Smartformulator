import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaListingComponent } from './formula-listing.component';

describe('FormulaListingComponent', () => {
  let component: FormulaListingComponent;
  let fixture: ComponentFixture<FormulaListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
