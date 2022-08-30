import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaftyPhrasesComponent } from './safty-phrases.component';

describe('SaftyPhrasesComponent', () => {
  let component: SaftyPhrasesComponent;
  let fixture: ComponentFixture<SaftyPhrasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaftyPhrasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaftyPhrasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
