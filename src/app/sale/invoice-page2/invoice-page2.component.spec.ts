import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePage2Component } from './invoice-page2.component';

describe('InvoicePage2Component', () => {
  let component: InvoicePage2Component;
  let fixture: ComponentFixture<InvoicePage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicePage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicePage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
