import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmNewPropertyComponent } from './frm-new-property.component';

describe('FrmNewPropertyComponent', () => {
  let component: FrmNewPropertyComponent;
  let fixture: ComponentFixture<FrmNewPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmNewPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmNewPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
