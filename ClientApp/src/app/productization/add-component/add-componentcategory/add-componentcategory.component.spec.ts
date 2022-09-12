import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponentcategoryComponent } from './add-componentcategory.component';

describe('AddComponentcategoryComponent', () => {
  let component: AddComponentcategoryComponent;
  let fixture: ComponentFixture<AddComponentcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComponentcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponentcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
