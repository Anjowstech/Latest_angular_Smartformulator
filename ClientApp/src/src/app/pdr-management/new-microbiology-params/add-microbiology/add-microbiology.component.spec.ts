import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMicrobiologyComponent } from './add-microbiology.component';

describe('AddMicrobiologyComponent', () => {
  let component: AddMicrobiologyComponent;
  let fixture: ComponentFixture<AddMicrobiologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMicrobiologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMicrobiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
