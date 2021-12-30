import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplemoduleComponent } from './samplemodule.component';

describe('SamplemoduleComponent', () => {
  let component: SamplemoduleComponent;
  let fixture: ComponentFixture<SamplemoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplemoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
