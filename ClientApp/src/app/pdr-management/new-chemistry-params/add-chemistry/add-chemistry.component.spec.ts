import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChemistryComponent } from './add-chemistry.component';

describe('AddChemistryComponent', () => {
  let component: AddChemistryComponent;
  let fixture: ComponentFixture<AddChemistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChemistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChemistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
