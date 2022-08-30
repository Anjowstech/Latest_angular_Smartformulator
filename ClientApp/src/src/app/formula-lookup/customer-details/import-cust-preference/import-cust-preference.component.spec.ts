import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCustPreferenceComponent } from './import-cust-preference.component';

describe('ImportCustPreferenceComponent', () => {
  let component: ImportCustPreferenceComponent;
  let fixture: ComponentFixture<ImportCustPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportCustPreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportCustPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
