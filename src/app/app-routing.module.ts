import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PreferenceModule } from './preference/preference.module';
import { SaleModule } from './sale/sale.module';
import { ContactModule } from './contact/contact.module';
import { ErrorsComponent } from './errors/errors.component';


const routes: Routes = [
 

  { path: '', component: HomeComponent, children: [
    //{ path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'  }
    { path: 'dashboard', loadChildren: () => DashboardModule  },
    { path: 'preference', loadChildren: () => PreferenceModule  },
    { path: 'sale', loadChildren: () => SaleModule  },
    { path: 'contact', loadChildren: () => ContactModule  },
  ]},
 
  {path: '**' , redirectTo:'/dashboard'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
