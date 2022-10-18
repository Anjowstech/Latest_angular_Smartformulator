import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInciComponent } from './search-inci.component';

describe('SearchInciComponent', () => {
  let component: SearchInciComponent;
  let fixture: ComponentFixture<SearchInciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
