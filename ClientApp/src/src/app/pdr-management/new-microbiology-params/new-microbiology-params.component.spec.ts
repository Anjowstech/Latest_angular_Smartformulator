import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMicrobiologyParamsComponent } from './new-microbiology-params.component';

describe('NewMicrobiologyParamsComponent', () => {
  let component: NewMicrobiologyParamsComponent;
  let fixture: ComponentFixture<NewMicrobiologyParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMicrobiologyParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMicrobiologyParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
