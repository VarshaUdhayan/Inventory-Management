import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

 salesList:any;


constructor(private dataService: DataService) { }



 ngOnInit(): void 
 {
  this.dataService.getPurchases(). subscribe (
    data => 
    {
      this.salesList= data;
      console.log(data);
     
    },
    error => {
      console.log(error);
    });
   
  }

}
