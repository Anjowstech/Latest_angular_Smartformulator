import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentimportComponent } from './componentimport.component';

describe('ComponentimportComponent', () => {
  let component: ComponentimportComponent;
  let fixture: ComponentFixture<ComponentimportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentimportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentimportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
