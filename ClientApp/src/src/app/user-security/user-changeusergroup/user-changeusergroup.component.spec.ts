import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChangeusergroupComponent } from './user-changeusergroup.component';

describe('UserChangeusergroupComponent', () => {
  let component: UserChangeusergroupComponent;
  let fixture: ComponentFixture<UserChangeusergroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserChangeusergroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChangeusergroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
