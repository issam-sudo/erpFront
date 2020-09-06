import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactHeaderComponent } from './contact-header/contact-header.component';
import { ContactCustomerComponent } from './contact-customer/contact-customer.component';
import { ContactNewCustomerComponent } from './contact-new-customer/contact-new-customer.component';
import { ContactNewSuppliersComponent } from './contact-new-suppliers/contact-new-suppliers.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
