import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskPhrasesComponent } from './risk-phrases.component';

describe('RiskPhrasesComponent', () => {
  let component: RiskPhrasesComponent;
  let fixture: ComponentFixture<RiskPhrasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskPhrasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskPhrasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
