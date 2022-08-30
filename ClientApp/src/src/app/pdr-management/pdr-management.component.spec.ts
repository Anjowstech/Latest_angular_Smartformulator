import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdrManagementComponent } from './pdr-management.component';

describe('PdrManagementComponent', () => {
  let component: PdrManagementComponent;
  let fixture: ComponentFixture<PdrManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdrManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdrManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
