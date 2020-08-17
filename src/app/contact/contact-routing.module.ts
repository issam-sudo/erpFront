import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactSuppliersComponent } from './contact-suppliers/contact-suppliers.component';
import { ContactContainerComponent } from './contact-container/contact-container.component';
import { ContactCustomerComponent } from './contact-customer/contact-customer.component';
import { ContactNewCustomerComponent } from './contact-new-customer/contact-new-customer.component';
import { ContactNewSuppliersComponent } from './contact-new-suppliers/contact-new-suppliers.component';


const routes: Routes = [ 
  {path:"" , component:ContactContainerComponent, children:[
    {path:"suppliers" , component:ContactSuppliersComponent},
    {path:"customer" , component:ContactCustomerComponent},
    {path:"newsuppliers" , component:ContactNewSuppliersComponent},
    {path:"newcustomer" , component:ContactNewCustomerComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
