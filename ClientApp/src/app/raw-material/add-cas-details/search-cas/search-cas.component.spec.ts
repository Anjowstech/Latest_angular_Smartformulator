import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCASComponent } from './search-cas.component';

describe('SearchCASComponent', () => {
  let component: SearchCASComponent;
  let fixture: ComponentFixture<SearchCASComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCASComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
