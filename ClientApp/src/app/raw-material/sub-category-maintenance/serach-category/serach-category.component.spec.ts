import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachCategoryComponent } from './serach-category.component';

describe('SerachCategoryComponent', () => {
  let component: SerachCategoryComponent;
  let fixture: ComponentFixture<SerachCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
