import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { CommonModule } from '@angular/common';
import { DefaultComponent } from 'src/app/layout/default/default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SalesComponent } from 'src/app/modules/sales/sales.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import {MatDividerModule} from '@angular/material/divider'; 
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from '@angular/material/card'; 
import { DashboardService } from 'src/app/modules/dashboard.service';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [DefaultComponent,
    DashboardComponent,PostsComponent,SalesComponent],
  imports: [
    //CommonModule,
   BrowserModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule ,
    MatPaginatorModule,
    MatTableModule
    
    ],
    providers:[
      DashboardService
    ]
})
export class DefaultModule { }
