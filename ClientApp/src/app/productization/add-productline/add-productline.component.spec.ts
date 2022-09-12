import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductlineComponent } from './add-productline.component';

describe('AddProductlineComponent', () => {
  let component: AddProductlineComponent;
  let fixture: ComponentFixture<AddProductlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
