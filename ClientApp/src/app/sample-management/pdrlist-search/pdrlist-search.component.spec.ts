import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PDRListSearchComponent } from './pdrlist-search.component';

describe('PDRListSearchComponent', () => {
  let component: PDRListSearchComponent;
  let fixture: ComponentFixture<PDRListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDRListSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDRListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
