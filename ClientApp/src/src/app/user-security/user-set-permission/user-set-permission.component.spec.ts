import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSetPermissionComponent } from './user-set-permission.component';

describe('UserSetPermissionComponent', () => {
  let component: UserSetPermissionComponent;
  let fixture: ComponentFixture<UserSetPermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSetPermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSetPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
