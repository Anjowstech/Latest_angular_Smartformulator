import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCmoComponent } from './search-cmo.component';

describe('SearchCmoComponent', () => {
  let component: SearchCmoComponent;
  let fixture: ComponentFixture<SearchCmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
