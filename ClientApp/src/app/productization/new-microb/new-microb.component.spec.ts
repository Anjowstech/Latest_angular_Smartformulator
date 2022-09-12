import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMicrobComponent } from './new-microb.component';

describe('NewMicrobComponent', () => {
  let component: NewMicrobComponent;
  let fixture: ComponentFixture<NewMicrobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMicrobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMicrobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
