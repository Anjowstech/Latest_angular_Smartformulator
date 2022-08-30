import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductTestingComponent } from './addproduct-testing.component';

describe('AddproductTestingComponent', () => {
  let component: AddproductTestingComponent;
  let fixture: ComponentFixture<AddproductTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproductTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproductTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
