import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTradenameComponent } from './search-tradename.component';

describe('SearchTradenameComponent', () => {
  let component: SearchTradenameComponent;
  let fixture: ComponentFixture<SearchTradenameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTradenameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTradenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
