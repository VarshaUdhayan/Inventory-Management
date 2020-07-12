import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { FormComponent } from   './modules/form/form.component';
import { InvoiceComponent } from './modules/invoice/invoice.component';



const routes: Routes = [{
  path:'',
  component:DefaultComponent,
  children:[{
    path:'',
    component:DashboardComponent,
  },
  {
    path:'posts',
  component:PostsComponent,
  },
  {
    path:'form',
    component:FormComponent,
  
  },
  {
  path:'invoice',
  component:InvoiceComponent,
  }
]



}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
