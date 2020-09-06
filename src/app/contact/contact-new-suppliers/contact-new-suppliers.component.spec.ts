import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactNewSuppliersComponent } from './contact-new-suppliers.component';

describe('ContactNewSuppliersComponent', () => {
  let component: ContactNewSuppliersComponent;
  let fixture: ComponentFixture<ContactNewSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactNewSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactNewSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
