import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSetPermissionComponent } from './group-set-permission.component';

describe('GroupSetPermissionComponent', () => {
  let component: GroupSetPermissionComponent;
  let fixture: ComponentFixture<GroupSetPermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSetPermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSetPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
