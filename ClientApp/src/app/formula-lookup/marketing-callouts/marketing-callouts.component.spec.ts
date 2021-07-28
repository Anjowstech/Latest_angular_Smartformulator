import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingCalloutsComponent } from './marketing-callouts.component';

describe('MarketingCalloutsComponent', () => {
  let component: MarketingCalloutsComponent;
  let fixture: ComponentFixture<MarketingCalloutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingCalloutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingCalloutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
