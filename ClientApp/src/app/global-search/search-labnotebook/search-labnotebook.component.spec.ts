import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLabnotebookComponent } from './search-labnotebook.component';

describe('SearchLabnotebookComponent', () => {
  let component: SearchLabnotebookComponent;
  let fixture: ComponentFixture<SearchLabnotebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLabnotebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLabnotebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
