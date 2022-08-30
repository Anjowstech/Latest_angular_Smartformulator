import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCustomerPdrComponent } from './search-customer-pdr.component';

describe('SearchCustomerPdrComponent', () => {
  let component: SearchCustomerPdrComponent;
  let fixture: ComponentFixture<SearchCustomerPdrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCustomerPdrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCustomerPdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
