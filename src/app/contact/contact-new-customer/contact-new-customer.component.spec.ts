import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactNewCustomerComponent } from './contact-new-customer.component';

describe('ContactNewCustomerComponent', () => {
  let component: ContactNewCustomerComponent;
  let fixture: ComponentFixture<ContactNewCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactNewCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactNewCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
