import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductcategoryComponent } from './add-productcategory.component';

describe('AddProductcategoryComponent', () => {
  let component: AddProductcategoryComponent;
  let fixture: ComponentFixture<AddProductcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
