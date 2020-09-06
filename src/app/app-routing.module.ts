import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PreferenceModule } from './preference/preference.module';
import { SaleModule } from './sale/sale.module';
import { ContactModule } from './contact/contact.module';
 
import { PurchaseModule } from './purchase/purchase.module';
const routes: Routes = [
 

  { path: '', component: HomeComponent, children: [
    //{ path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'  }
    { path: '', loadChildren: () => DashboardModule  },
    { path: 'preference', loadChildren: () => PreferenceModule  },
    { path: 'sale', loadChildren: () => SaleModule  },
    { path: 'contact', loadChildren: () => ContactModule  },
    { path: 'purchase', loadChildren: () => PurchaseModule  },
  ]},
 
  {path: '**' , redirectTo:''},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
