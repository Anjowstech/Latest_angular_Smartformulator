import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermMasterCustComponent } from './term-master-cust.component';

describe('TermMasterCustComponent', () => {
  let component: TermMasterCustComponent;
  let fixture: ComponentFixture<TermMasterCustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermMasterCustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermMasterCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
