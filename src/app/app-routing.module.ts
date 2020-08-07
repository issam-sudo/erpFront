import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PreferenceModule } from './preference/preference.module';


const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    //{ path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'  }
    { path: 'dashboard', loadChildren: () => DashboardModule  },
    { path: 'preference', loadChildren: () => PreferenceModule  },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
