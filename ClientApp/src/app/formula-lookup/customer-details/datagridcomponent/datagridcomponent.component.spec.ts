import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridcomponentComponent } from './datagridcomponent.component';

describe('DatagridcomponentComponent', () => {
  let component: DatagridcomponentComponent;
  let fixture: ComponentFixture<DatagridcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatagridcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
