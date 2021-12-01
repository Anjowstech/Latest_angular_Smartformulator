import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawmaterialRestrictionProp65Component } from './rawmaterial-restriction-prop65.component';

describe('RawmaterialRestrictionProp65Component', () => {
  let component: RawmaterialRestrictionProp65Component;
  let fixture: ComponentFixture<RawmaterialRestrictionProp65Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawmaterialRestrictionProp65Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawmaterialRestrictionProp65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
