import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { SharedModule } from '../shared/shared.module';
// import { QuoteComponent } from './quote/quote.component';
import { NewProductServiceComponent } from './new-product-service/new-product-service.component';
// import { DeliveryNoteComponent } from './delivery-note/delivery-note.component';
import { SaleHeaderComponent } from './sale-header/sale-header.component';


@NgModule({
  declarations: [ SaleHeaderComponent],
  imports: [
    CommonModule,
    SaleRoutingModule,
    SharedModule
  ],
})
export class SaleModule { }
