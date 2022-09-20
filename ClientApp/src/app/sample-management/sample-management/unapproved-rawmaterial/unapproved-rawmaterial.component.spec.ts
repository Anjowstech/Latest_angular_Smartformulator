import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovedRawmaterialComponent } from './unapproved-rawmaterial.component';

describe('UnapprovedRawmaterialComponent', () => {
  let component: UnapprovedRawmaterialComponent;
  let fixture: ComponentFixture<UnapprovedRawmaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnapprovedRawmaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnapprovedRawmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
