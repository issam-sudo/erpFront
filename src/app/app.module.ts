import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { NavComponent } from './core/nav/nav.component';
import { HeaderComponent } from './core/header/header.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AccountComponent } from './preference/account/account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from  '../app/shared/shared.module';
import { AccountAddUserFrom } from './preference/account/account.component';
import { AccountFacturationFrom } from './preference/account/account.component';
import {HttpClientModule} from '@angular/common/http';
import { PreferenceContainerComponent } from './preference/preference-container/preference-container.component';
import { HeaderPreferenceComponent } from './preference/header-preference/header-preference.component';
import { InvoiceComponent } from './preference/invoice/invoice.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    DashboardComponent,
    AccountComponent,
    AccountAddUserFrom,
    AccountFacturationFrom,
    PreferenceContainerComponent,
    HeaderPreferenceComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
