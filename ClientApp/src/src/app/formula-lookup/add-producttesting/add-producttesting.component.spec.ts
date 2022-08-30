import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProducttestingComponent } from './add-producttesting.component';

describe('AddProducttestingComponent', () => {
  let component: AddProducttestingComponent;
  let fixture: ComponentFixture<AddProducttestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProducttestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProducttestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
