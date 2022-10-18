import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSubCategoryComponent } from './search-sub-category.component';

describe('SearchSubCategoryComponent', () => {
  let component: SearchSubCategoryComponent;
  let fixture: ComponentFixture<SearchSubCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSubCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
