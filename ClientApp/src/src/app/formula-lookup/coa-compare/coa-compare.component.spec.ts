import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoaCompareComponent } from './coa-compare.component';

describe('CoaCompareComponent', () => {
  let component: CoaCompareComponent;
  let fixture: ComponentFixture<CoaCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoaCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoaCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
