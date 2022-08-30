import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradenameSelectComponent } from './tradename-select.component';

describe('TradenameSelectComponent', () => {
  let component: TradenameSelectComponent;
  let fixture: ComponentFixture<TradenameSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradenameSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradenameSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
