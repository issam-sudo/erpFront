import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferenceRoutingModule } from './preference-routing.module';
import { InvoiceComponent } from './invoice/invoice.component';



@NgModule({
  declarations: [InvoiceComponent],
  imports: [
    CommonModule,
    PreferenceRoutingModule
  ]
})
export class PreferenceModule { }
