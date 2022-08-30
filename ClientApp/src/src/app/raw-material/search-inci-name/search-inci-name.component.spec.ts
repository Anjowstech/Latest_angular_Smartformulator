import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchINCINameComponent } from './search-inci-name.component';

describe('SearchINCINameComponent', () => {
  let component: SearchINCINameComponent;
  let fixture: ComponentFixture<SearchINCINameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchINCINameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchINCINameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
