import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCASDetailsComponent } from './add-cas-details.component';

describe('AddCASDetailsComponent', () => {
  let component: AddCASDetailsComponent;
  let fixture: ComponentFixture<AddCASDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCASDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCASDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
