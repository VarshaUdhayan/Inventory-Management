import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FormComponent } from   './modules/form/form.component';
import { CustomerComponent } from './modules/customer/customer.component';
import { InvoiceComponent } from './modules/invoice/invoice.component';
import { PostsComponent } from './modules/posts/posts.component';
import { SalesComponent } from './modules/sales/sales.component';
import { CommonModule } from "@angular/common";



const routes: Routes = [{
  path:'',
  component:DefaultComponent,
  children:[
    {
    path:'',
    component:DashboardComponent,
  },
  {
    path:'form',
    component:FormComponent,
  
  },
  { 
    path:'customer',
  component:CustomerComponent,
  },
  {
  path:'invoice',
  component:InvoiceComponent,
  },
  {
    path:'posts',
  component:PostsComponent,
  },
  { 
    path:'sales',
  component:SalesComponent,
  },
  
  
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
