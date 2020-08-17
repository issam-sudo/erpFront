import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryNotePage2Component } from './delivery-note-page2.component';




describe('DeliveryNotePage2Component', () => {
  let component: DeliveryNotePage2Component;
  let fixture: ComponentFixture<DeliveryNotePage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryNotePage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryNotePage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
