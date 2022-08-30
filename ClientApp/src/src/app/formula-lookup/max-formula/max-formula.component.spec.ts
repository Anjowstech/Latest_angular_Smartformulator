import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxFormulaComponent } from './max-formula.component';

describe('MaxFormulaComponent', () => {
  let component: MaxFormulaComponent;
  let fixture: ComponentFixture<MaxFormulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxFormulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
