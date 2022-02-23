import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChemistryParamsComponent } from './new-chemistry-params.component';

describe('NewChemistryParamsComponent', () => {
  let component: NewChemistryParamsComponent;
  let fixture: ComponentFixture<NewChemistryParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewChemistryParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChemistryParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
