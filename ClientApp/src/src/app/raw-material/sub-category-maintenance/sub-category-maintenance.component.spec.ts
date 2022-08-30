import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryMaintenanceComponent } from './sub-category-maintenance.component';

describe('SubCategoryMaintenanceComponent', () => {
  let component: SubCategoryMaintenanceComponent;
  let fixture: ComponentFixture<SubCategoryMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCategoryMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoryMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
