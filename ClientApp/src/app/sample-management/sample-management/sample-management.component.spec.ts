import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleManagementComponent } from './sample-management.component';

describe('SampleManagementComponent', () => {
  let component: SampleManagementComponent;
  let fixture: ComponentFixture<SampleManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
