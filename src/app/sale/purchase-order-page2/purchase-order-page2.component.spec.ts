import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderPage2Component } from './purchase-order-page2.component';

describe('PurchaseOrderPage2Component', () => {
  let component: PurchaseOrderPage2Component;
  let fixture: ComponentFixture<PurchaseOrderPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseOrderPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrderPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
