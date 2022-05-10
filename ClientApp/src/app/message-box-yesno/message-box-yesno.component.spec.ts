import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBoxYesnoComponent } from './message-box-yesno.component';

describe('MessageBoxYesnoComponent', () => {
  let component: MessageBoxYesnoComponent;
  let fixture: ComponentFixture<MessageBoxYesnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageBoxYesnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBoxYesnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
