import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from 'src/app/pizza.service';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {
  angForm:FormGroup;
  constructor(private fb: FormBuilder, private service:PizzaService, public local: LocalStorageService) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm(){
    this.angForm=this.fb.group({
      pid:['',Validators.required],
      name:['',Validators.required],
      price:['',Validators.required]
    });
  }
  addAPizza(pid,name,price):void{
    this.service.addAPizza(pid,name,price);
  }
}
