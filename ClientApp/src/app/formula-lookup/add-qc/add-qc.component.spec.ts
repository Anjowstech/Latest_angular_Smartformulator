import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQCComponent } from './add-qc.component';

describe('AddQCComponent', () => {
  let component: AddQCComponent;
  let fixture: ComponentFixture<AddQCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
