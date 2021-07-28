import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawSearchSupplierComponent } from './raw-search-supplier.component';

describe('RawSearchSupplierComponent', () => {
  let component: RawSearchSupplierComponent;
  let fixture: ComponentFixture<RawSearchSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawSearchSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawSearchSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
