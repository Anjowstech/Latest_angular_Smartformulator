import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSubmissionComponent } from './search-submission.component';

describe('SearchSubmissionComponent', () => {
  let component: SearchSubmissionComponent;
  let fixture: ComponentFixture<SearchSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
