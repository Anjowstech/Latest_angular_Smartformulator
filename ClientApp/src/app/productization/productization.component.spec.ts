import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductizationComponent } from './productization.component';

describe('ProductizationComponent', () => {
  let component: ProductizationComponent;
  let fixture: ComponentFixture<ProductizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
