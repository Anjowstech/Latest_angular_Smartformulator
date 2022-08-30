import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLabTktsComponent } from './create-lab-tkts.component';

describe('CreateLabTktsComponent', () => {
  let component: CreateLabTktsComponent;
  let fixture: ComponentFixture<CreateLabTktsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLabTktsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLabTktsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
