import { SaleInvoiceComponent } from './sale-invoice/sale-invoice.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaleContainerComponent } from './sale-container/sale-container.component';
import { RecurringBillsComponent } from './recurring-bills/recurring-bills.component';
import { QuoteComponent } from './quote/quote.component';
import { NewProductServiceComponent } from './new-product-service/new-product-service.component';
import {DeliveryNoteComponent } from './delivery-note/delivery-note.component' ;
import { PurchaseOrdersComponent } from './purchase-orders/purchase-orders.component';


const routes: Routes = [
  {path:"" , component:SaleContainerComponent, children:[
    {path:"recurring-bills" , component:RecurringBillsComponent},
    {path:"quote" , component:QuoteComponent},
    {path:"new-product-service" , component:NewProductServiceComponent},
    {path:"delivry-note" , component:DeliveryNoteComponent},
    {path:"purchase-orders" , component:PurchaseOrdersComponent},
    {path:"invoice" , component:SaleInvoiceComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule { }
