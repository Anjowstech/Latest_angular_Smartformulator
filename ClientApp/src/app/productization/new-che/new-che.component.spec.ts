import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCheComponent } from './new-che.component';

describe('NewCheComponent', () => {
  let component: NewCheComponent;
  let fixture: ComponentFixture<NewCheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
