import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferenceRoutingModule } from './preference-routing.module';
import { InvoiceComponent } from './invoice/invoice.component';
import { PreferenceContainerComponent } from './preference-container/preference-container.component';


@NgModule({
  declarations: [InvoiceComponent, PreferenceContainerComponent],
  imports: [
    CommonModule,
    PreferenceRoutingModule
  ]
})
export class PreferenceModule { }
