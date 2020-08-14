import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactSuppliersComponent } from './contact-suppliers/contact-suppliers.component';
import { ContactContainerComponent } from './contact-container/contact-container.component';


const routes: Routes = [ 
  {path:"" , component:ContactContainerComponent, children:[
    {path:"suppliers" , component:ContactSuppliersComponent},
 
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
