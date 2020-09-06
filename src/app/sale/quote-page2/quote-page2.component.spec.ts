import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotePage2Component } from './quote-page2.component';

describe('QuotePage2Component', () => {
  let component: QuotePage2Component;
  let fixture: ComponentFixture<QuotePage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotePage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotePage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
