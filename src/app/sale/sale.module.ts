import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleRoutingModule } from './sale-routing.module';
import { SharedModule } from '../shared/shared.module';
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
