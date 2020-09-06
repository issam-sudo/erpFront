import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseCategoryComponent } from './purchase-category/purchase-category.component';
import { PurchaseContainerComponent } from './purchase-container/purchase-container.component';
import { PurchaseInvoiceComponent } from './purchase-invoice/purchase-invoice.component';


const routes: Routes = [

  {path:"" , component:PurchaseContainerComponent, children:[
    {path:"category" , component:PurchaseCategoryComponent},
    {path:"invoice" , component:PurchaseInvoiceComponent},
  ]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
