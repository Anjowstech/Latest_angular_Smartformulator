import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClasscodeComponent } from './add-classcode.component';

describe('AddClasscodeComponent', () => {
  let component: AddClasscodeComponent;
  let fixture: ComponentFixture<AddClasscodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClasscodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClasscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
