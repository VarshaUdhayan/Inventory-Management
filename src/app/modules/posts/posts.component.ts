import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  productList:any;
  
  constructor(private dataService: DataService) { }

 //products :Products[] =[];

  ngOnInit(): void 
  {
    this.dataService.getProducts(). subscribe (
    data => 
    {
      this.productList= data;
      console.log(data);
    },
    error => {
      console.log(error);
    });

  }
}


 

 

 
  