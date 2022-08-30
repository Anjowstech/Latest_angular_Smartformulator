import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPdrComponent } from './assign-pdr.component';

describe('AssignPdrComponent', () => {
  let component: AssignPdrComponent;
  let fixture: ComponentFixture<AssignPdrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignPdrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignPdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
