import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCustomerCustComponent } from './search-customer-cust.component';

describe('SearchCustomerCustComponent', () => {
  let component: SearchCustomerCustComponent;
  let fixture: ComponentFixture<SearchCustomerCustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCustomerCustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCustomerCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
