import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdrTrackStatusComponent } from './pdr-track-status.component';

describe('PdrTrackStatusComponent', () => {
  let component: PdrTrackStatusComponent;
  let fixture: ComponentFixture<PdrTrackStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdrTrackStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdrTrackStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
