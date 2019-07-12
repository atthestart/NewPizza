import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from 'src/app/pizza.service';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza-delete',
  templateUrl: './pizza-delete.component.html',
  styleUrls: ['./pizza-delete.component.css']
})
export class PizzaDeleteComponent implements OnInit {

  constructor(private route:ActivatedRoute, private pizzaService:PizzaService) { }
private pizza:Pizza[];
  ngOnInit() {
    let orderName=+this.route.snapshot.paramMap.get("orderName");
    this.deleteOrder(orderName);
  }
  deleteOrder(orderName)
  {
    this.pizzaService.deleteFromCart(orderName);
    this.pizzaService.getitems().subscribe(p=>{
      console.log(p);
    this.pizza=p;
});
  }

}
