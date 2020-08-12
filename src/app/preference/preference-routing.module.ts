import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
 import { PreferenceContainerComponent } from './preference-container/preference-container.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { QuoteComponent } from './quote/quote.component';


const routes: Routes = [
  {path:"" , component:PreferenceContainerComponent, children:[
    {path:"account" , component:AccountComponent},
    {path:"invoice" , component:InvoiceComponent},
    {path:"quote" , component:QuoteComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferenceRoutingModule { }
