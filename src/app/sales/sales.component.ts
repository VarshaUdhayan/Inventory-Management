import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPurchases(). subscribe (
      (data: any) => 
    {
      console.log(data);
      
     }, (err) => 
     {
      console.log(err.error.message);
     });


  }

}
