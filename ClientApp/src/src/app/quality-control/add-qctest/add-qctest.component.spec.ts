import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQctestComponent } from './add-qctest.component';

describe('AddQctestComponent', () => {
  let component: AddQctestComponent;
  let fixture: ComponentFixture<AddQctestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQctestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQctestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
