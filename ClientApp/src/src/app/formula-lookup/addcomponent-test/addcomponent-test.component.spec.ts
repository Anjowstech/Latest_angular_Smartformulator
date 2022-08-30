import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcomponentTestComponent } from './addcomponent-test.component';

describe('AddcomponentTestComponent', () => {
  let component: AddcomponentTestComponent;
  let fixture: ComponentFixture<AddcomponentTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcomponentTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcomponentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
