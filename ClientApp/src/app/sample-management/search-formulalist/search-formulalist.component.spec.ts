import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormulalistComponent } from './search-formulalist.component';

describe('SearchFormulalistComponent', () => {
  let component: SearchFormulalistComponent;
  let fixture: ComponentFixture<SearchFormulalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFormulalistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormulalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
