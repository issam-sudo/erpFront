import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PreferenceContainerComponent } from './preference-container/preference-container.component';


const routes: Routes = [
  {path:"" , component:PreferenceContainerComponent, children:[
    {path:"account" , component:AccountComponent},
    {path:"invoice" , component:InvoiceComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferenceRoutingModule { }
