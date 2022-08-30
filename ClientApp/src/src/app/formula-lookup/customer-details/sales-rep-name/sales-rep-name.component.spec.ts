import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesRepNameComponent } from './sales-rep-name.component';

describe('SalesRepNameComponent', () => {
  let component: SalesRepNameComponent;
  let fixture: ComponentFixture<SalesRepNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesRepNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesRepNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
