import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitmeasureMaintenanceComponent } from './unitmeasure-maintenance.component';

describe('UnitmeasureMaintenanceComponent', () => {
  let component: UnitmeasureMaintenanceComponent;
  let fixture: ComponentFixture<UnitmeasureMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitmeasureMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitmeasureMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
