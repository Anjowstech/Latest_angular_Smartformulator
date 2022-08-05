import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLabStabilityCoaComponent } from './view-lab-stability-coa.component';

describe('ViewLabStabilityCoaComponent', () => {
  let component: ViewLabStabilityCoaComponent;
  let fixture: ComponentFixture<ViewLabStabilityCoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLabStabilityCoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLabStabilityCoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
