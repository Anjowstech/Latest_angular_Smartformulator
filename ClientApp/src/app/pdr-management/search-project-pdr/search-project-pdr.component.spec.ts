import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProjectPdrComponent } from './search-project-pdr.component';

describe('SearchProjectPdrComponent', () => {
  let component: SearchProjectPdrComponent;
  let fixture: ComponentFixture<SearchProjectPdrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProjectPdrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProjectPdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
