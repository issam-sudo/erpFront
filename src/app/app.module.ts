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
import { DeliveryNoteComponent } from './sale/delivery-note/delivery-note.component';
import { DeliveryNotePage2Component } from './sale/delivery-note-page2/delivery-note-page2.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { QuoteComponent } from './sale/quote/quote.component';
import { PurchaseCategoryComponent } from './purchase/purchase-category/purchase-category.component';
import { Category_fileUpload } from './purchase/purchase-category/purchase-category.component';
import { NewProductServiceComponent } from './sale/new-product-service/new-product-service.component';
import { PurchaseOrderPage2Component } from './sale/purchase-order-page2/purchase-order-page2.component';
import { QuotePage2Component } from './sale/quote-page2/quote-page2.component';
import { InvoicePage2Component } from './sale/invoice-page2/invoice-page2.component';
import { PurchaseHeaderComponent } from './purchase/purchase-header/purchase-header.component';
import { PurchaseContainerComponent } from './purchase/purchase-container/purchase-container.component';
import { RecurringBillsPage2Component } from './sale/recurring-bills-page2/recurring-bills-page2.component';
import { date } from './sale/delivery-note-page2/delivery-note-page2.component';
import { paymentTerms } from './sale/delivery-note-page2/delivery-note-page2.component';
import {message } from './sale/delivery-note-page2/delivery-note-page2.component';
import {adressNameQuote } from './sale/quote-page2/quote-page2.component';
import {dateQuote } from './sale/quote-page2/quote-page2.component';
import {payamentQuote } from './sale/quote-page2/quote-page2.component';
import {noteQuote } from './sale/quote-page2/quote-page2.component';






import { PurchaseInvoiceComponent } from './purchase/purchase-invoice/purchase-invoice.component';
import { Facture_fileUpload } from './purchase/purchase-invoice/purchase-invoice.component';




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
    Category_fileUpload,
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
   
    PurchaseInvoiceComponent,
    PurchaseCategoryComponent,
    

    //sale 
    QuoteComponent,
    NewProductServiceComponent,
    PurchaseOrderPage2Component,
    QuotePage2Component,
    DeliveryNotePage2Component, 
    DeliveryNoteComponent,
    PurchaseOrdersComponent,
    RecurringBillsComponent,
    SaleInvoiceComponent,
   SaleContainerComponent,
   InvoicePage2Component,
   PurchaseHeaderComponent,
   PurchaseContainerComponent,
   RecurringBillsPage2Component,
   //pop-up class
   date,
   paymentTerms,
   message,
   adressNameQuote,
   dateQuote,
   payamentQuote,
   noteQuote,
   

   Facture_fileUpload
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    PdfViewerModule,
    MatPaginatorModule,
    MatTableExporterModule,
    MatTooltipModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
