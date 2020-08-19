import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseCategoryComponent } from './purchase-category/purchase-category.component';


const routes: Routes = [
  { path: 'category', component: PurchaseCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
