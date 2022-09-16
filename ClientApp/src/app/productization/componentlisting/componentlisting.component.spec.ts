import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentlistingComponent } from './componentlisting.component';

describe('ComponentlistingComponent', () => {
  let component: ComponentlistingComponent;
  let fixture: ComponentFixture<ComponentlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
