import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawmaterialRestrictionComponent } from './rawmaterial-restriction.component';

describe('RawmaterialRestrictionComponent', () => {
  let component: RawmaterialRestrictionComponent;
  let fixture: ComponentFixture<RawmaterialRestrictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawmaterialRestrictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawmaterialRestrictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
