import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewParamComponent } from './addnew-param.component';

describe('AddnewParamComponent', () => {
  let component: AddnewParamComponent;
  let fixture: ComponentFixture<AddnewParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
