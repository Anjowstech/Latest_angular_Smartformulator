import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestnameComponent } from './add-testname.component';

describe('AddTestnameComponent', () => {
  let component: AddTestnameComponent;
  let fixture: ComponentFixture<AddTestnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTestnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTestnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
