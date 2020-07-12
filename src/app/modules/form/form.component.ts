import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  get productname(){
    return this.loginform.get('productname');
  }

  get productno(){
    return this.loginform.get('productno');
  }
  get quantity(){
    return this.loginform.get('quantity');
  }
  get price(){
    return this.loginform.get('price');
  }
  get vendor(){
    return this.loginform.get('vendor');
  }

  constructor( private fb: FormBuilder){}
  loginform =this.fb.group({
    productname :['',Validators.required],
    productno:['',Validators.required],
    quantity:['',Validators.required],
    price:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
    vendor:['',Validators.required]
  });

  ngOnInit(): void {
  }

}
