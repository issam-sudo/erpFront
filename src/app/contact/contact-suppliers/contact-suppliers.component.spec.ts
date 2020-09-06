import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSuppliersComponent } from './contact-suppliers.component';

describe('ContactSuppliersComponent', () => {
  let component: ContactSuppliersComponent;
  let fixture: ComponentFixture<ContactSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
