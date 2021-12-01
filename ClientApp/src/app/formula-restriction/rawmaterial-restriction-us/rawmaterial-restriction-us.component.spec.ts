import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawmaterialRestrictionUsComponent } from './rawmaterial-restriction-us.component';

describe('RawmaterialRestrictionUsComponent', () => {
  let component: RawmaterialRestrictionUsComponent;
  let fixture: ComponentFixture<RawmaterialRestrictionUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawmaterialRestrictionUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawmaterialRestrictionUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
