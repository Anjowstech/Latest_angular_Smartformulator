import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddphystabilityTestComponent } from './addphystability-test.component';

describe('AddphystabilityTestComponent', () => {
  let component: AddphystabilityTestComponent;
  let fixture: ComponentFixture<AddphystabilityTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddphystabilityTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddphystabilityTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
