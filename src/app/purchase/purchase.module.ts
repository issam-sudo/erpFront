import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';


import { SharedModule } from  '../shared/shared.module';
import { PurchaseInvoiceComponent } from './purchase-invoice/purchase-invoice.component';

@NgModule({
  declarations: [PurchaseInvoiceComponent],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    SharedModule
  ]
})
export class PurchaseModule { }
