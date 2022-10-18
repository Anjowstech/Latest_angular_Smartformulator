import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Searchcas2Component } from './searchcas2.component';

describe('Searchcas2Component', () => {
  let component: Searchcas2Component;
  let fixture: ComponentFixture<Searchcas2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Searchcas2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Searchcas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
