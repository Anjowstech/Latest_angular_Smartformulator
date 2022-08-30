import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { LoadPropertyComponent } from './load-property.component';

describe('LoadPropertyComponent', () => {
  let component: LoadPropertyComponent;
  let fixture: ComponentFixture<LoadPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
