import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { DefaultModule } from './layouts/default/default.module';
//import { CommonModule } from '@angular/common';
import { FormComponent } from './modules/form/form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InvoiceComponent } from './modules/invoice/invoice.component';
import { SalesComponent } from './sales/sales.component';
import { CustomerComponent } from './modules/customer/customer.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    InvoiceComponent,
    SalesComponent,
    CustomerComponent,
    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    DefaultModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
 
    
    //CommonModule
   
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
