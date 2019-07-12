import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/pizza.service';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza-add',
  templateUrl: './pizza-add.component.html',
  styleUrls: ['./pizza-add.component.css']
})
export class PizzaAddComponent implements OnInit {
 pizzas:Pizza[];

  constructor(private pizzaService:PizzaService) { }

  ngOnInit() {
    this.pizzas=this.pizzaService.getCartPizzas();
  }
  // addPizza(name,price):void{
  //   this.pizzaService.addPizza(this.newPizza);
  // }

}
