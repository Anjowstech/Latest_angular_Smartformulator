import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmsaveasComponent } from './rmsaveas.component';

describe('RmsaveasComponent', () => {
  let component: RmsaveasComponent;
  let fixture: ComponentFixture<RmsaveasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmsaveasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmsaveasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
