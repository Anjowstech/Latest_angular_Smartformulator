import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPdrComponent } from './search-pdr.component';

describe('SearchPdrComponent', () => {
  let component: SearchPdrComponent;
  let fixture: ComponentFixture<SearchPdrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPdrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
