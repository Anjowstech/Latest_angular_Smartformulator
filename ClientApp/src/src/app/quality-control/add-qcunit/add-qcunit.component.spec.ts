import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQcunitComponent } from './add-qcunit.component';

describe('AddQcunitComponent', () => {
  let component: AddQcunitComponent;
  let fixture: ComponentFixture<AddQcunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQcunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQcunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
