import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQcComponent } from './update-qc.component';

describe('UpdateQcComponent', () => {
  let component: UpdateQcComponent;
  let fixture: ComponentFixture<UpdateQcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateQcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateQcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
