import { SaleInvoiceComponent } from './sale/sale-invoice/sale-invoice.component';
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
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FileUpload } from './preference/invoice/invoice.component';
import { Quote_fileUpload } from './preference/quote/quote.component';
import { QuoteComponent } from './preference/quote/quote.component';
import { SaleContainerComponent } from './sale/sale-container/sale-container.component';
import { RecurringBillsComponent } from './sale/recurring-bills/recurring-bills.component';
import { PreferenceReminderComponent } from './preference/preference-reminder/preference-reminder.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ContactSuppliersComponent } from './contact/contact-suppliers/contact-suppliers.component';
import { ContactContainerComponent } from './contact/contact-container/contact-container.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ContactHeaderComponent } from './contact/contact-header/contact-header.component';
import { MatTableExporterModule } from 'mat-table-exporter';
import { ContactCustomerComponent } from './contact/contact-customer/contact-customer.component';
import { ContactNewCustomerComponent } from './contact/contact-new-customer/contact-new-customer.component';
import { ContactNewSuppliersComponent } from './contact/contact-new-suppliers/contact-new-suppliers.component';
import { PurchaseOrdersComponent } from './sale/purchase-orders/purchase-orders.component';

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
    InvoiceComponent,
    FileUpload,
    QuoteComponent,
    SaleContainerComponent,
    RecurringBillsComponent,
    SaleInvoiceComponent,
    Quote_fileUpload,
    PreferenceReminderComponent,
    ContactSuppliersComponent,
    ContactContainerComponent,
    ContactHeaderComponent,
    ContactCustomerComponent,
    ContactNewCustomerComponent,
    ContactNewSuppliersComponent,
    PurchaseOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    PdfViewerModule,
    MatPaginatorModule,
    MatTableExporterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
