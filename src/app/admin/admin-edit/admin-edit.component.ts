import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from 'src/app/pizzashop/pizza';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from 'src/app/pizza.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  @Input()
  pizza:Pizza;
  
  constructor(private route:ActivatedRoute ,private service:PizzaService) { }

  ngOnInit() {
     }
  updatePizza(pid:any,price:any){
    console.log("entered");
    this.service.updatePizza(pid,price);
    console.log("entered2");
  }
}
