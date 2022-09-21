import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshippingregulatoryComponent } from './addshippingregulatory.component';

describe('AddshippingregulatoryComponent', () => {
  let component: AddshippingregulatoryComponent;
  let fixture: ComponentFixture<AddshippingregulatoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddshippingregulatoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddshippingregulatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
