import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemnameSelectComponent } from './itemname-select.component';

describe('ItemnameSelectComponent', () => {
  let component: ItemnameSelectComponent;
  let fixture: ComponentFixture<ItemnameSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemnameSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemnameSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
