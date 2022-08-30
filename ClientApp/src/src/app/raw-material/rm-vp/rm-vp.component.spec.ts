import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RMVPComponent } from './rm-vp.component';

describe('RMVPComponent', () => {
  let component: RMVPComponent;
  let fixture: ComponentFixture<RMVPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RMVPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RMVPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
