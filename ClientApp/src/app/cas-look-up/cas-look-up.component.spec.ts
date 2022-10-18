import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasLookUpComponent } from './cas-look-up.component';

describe('CasLookUpComponent', () => {
  let component: CasLookUpComponent;
  let fixture: ComponentFixture<CasLookUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasLookUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasLookUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
