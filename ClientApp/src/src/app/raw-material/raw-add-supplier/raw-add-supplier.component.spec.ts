import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawAddSupplierComponent } from './raw-add-supplier.component';

describe('RawAddSupplierComponent', () => {
  let component: RawAddSupplierComponent;
  let fixture: ComponentFixture<RawAddSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawAddSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawAddSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
