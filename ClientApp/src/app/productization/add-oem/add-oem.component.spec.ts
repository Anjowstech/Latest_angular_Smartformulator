import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOemComponent } from './add-oem.component';

describe('AddOemComponent', () => {
  let component: AddOemComponent;
  let fixture: ComponentFixture<AddOemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
