import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from 'src/app/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pizzaList:Pizza[];
  selectedPizza : Pizza;
pizzas:Pizza[]=[];
  
  constructor(private route:ActivatedRoute, private service:PizzaService, public local: LocalStorageService) { }

  ngOnInit() {
    this.service.getPizzas().subscribe(pizzaList=>this.pizzaList=pizzaList);
  }
onSelection(pizza:Pizza){
  this.selectedPizza=pizza;

}
addToCart(pizza:Pizza){
  window.alert('Pizza has been added to the cart!');
  this.local.set(""+pizza.name,pizza)
  this.service.addToCart(pizza);
}
}
