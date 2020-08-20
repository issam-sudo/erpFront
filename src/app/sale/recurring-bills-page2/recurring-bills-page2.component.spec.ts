import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringBillsPage2Component } from './recurring-bills-page2.component';

describe('RecurringBillsPage2Component', () => {
  let component: RecurringBillsPage2Component;
  let fixture: ComponentFixture<RecurringBillsPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecurringBillsPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringBillsPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
