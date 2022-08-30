import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncinameSelectComponent } from './inciname-select.component';

describe('IncinameSelectComponent', () => {
  let component: IncinameSelectComponent;
  let fixture: ComponentFixture<IncinameSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncinameSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncinameSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
