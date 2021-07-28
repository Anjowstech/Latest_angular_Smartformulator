import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPersonCustComponent } from './sales-person-cust.component';

describe('SalesPersonCustComponent', () => {
  let component: SalesPersonCustComponent;
  let fixture: ComponentFixture<SalesPersonCustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPersonCustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPersonCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
