import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferenceRoutingModule } from './preference-routing.module';
import { QuoteComponent } from './quote/quote.component';
 
import { SharedModule } from  '../shared/shared.module';

@NgModule({
  declarations: [QuoteComponent],
  imports: [
    CommonModule,
    PreferenceRoutingModule,
    SharedModule
  ]
})
export class PreferenceModule { }
