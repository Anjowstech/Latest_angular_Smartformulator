import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcheComponent } from './addche.component';

describe('AddcheComponent', () => {
  let component: AddcheComponent;
  let fixture: ComponentFixture<AddcheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
