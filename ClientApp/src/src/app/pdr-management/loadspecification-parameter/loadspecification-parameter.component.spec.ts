import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadspecificationParameterComponent } from './loadspecification-parameter.component';

describe('LoadspecificationParameterComponent', () => {
  let component: LoadspecificationParameterComponent;
  let fixture: ComponentFixture<LoadspecificationParameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadspecificationParameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadspecificationParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
