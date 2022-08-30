import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionSearchComponent } from './function-search.component';

describe('FunctionSearchComponent', () => {
  let component: FunctionSearchComponent;
  let fixture: ComponentFixture<FunctionSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
