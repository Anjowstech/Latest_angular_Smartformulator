import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarketingIndicatorComponent } from './add-marketing-indicator.component';

describe('AddMarketingIndicatorComponent', () => {
  let component: AddMarketingIndicatorComponent;
  let fixture: ComponentFixture<AddMarketingIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMarketingIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarketingIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
