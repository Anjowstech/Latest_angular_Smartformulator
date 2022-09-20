import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLabnameComponent } from './add-labname.component';

describe('AddLabnameComponent', () => {
  let component: AddLabnameComponent;
  let fixture: ComponentFixture<AddLabnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLabnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLabnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
