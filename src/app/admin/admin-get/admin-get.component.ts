import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/pizzashop/pizza';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from 'src/app/pizza.service';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-admin-get',
  templateUrl: './admin-get.component.html',
  styleUrls: ['./admin-get.component.css']
})
export class AdminGetComponent implements OnInit {
  selectedPizza: Pizza;
  pizzaList:Pizza[];
  constructor(private route:ActivatedRoute, private service:PizzaService, public local: LocalStorageService) { }

  ngOnInit() {
    this.service.getAPizzas().subscribe(pizzaList=>this.pizzaList=pizzaList);
  }
  onSelection(pizza:Pizza){
    this.selectedPizza=pizza;
  }
}

