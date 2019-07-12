import { Injectable } from '@angular/core';
import { pizzalist } from './pizzashop/pizza-list/pizza-list';
import { Pizza } from './pizzashop/pizza';
import { Observable , of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
 
  pizzas:Pizza[] = [];
  uri='http://localhost:4000/pizza'; 
  constructor(public httpClient:HttpClient) { }
  addAPizza(pid,name,price){
    let pizza={
      pid:pid,
      name:name,
      price:price,
    }
    return this.httpClient.post(`${this.uri}`+'/admin/pizza-list/addPizza',pizza)
    .subscribe(res=>console.log("New pizza successfully"));
  }
 
  getPizzas():Observable<Pizza[]>{
    return this.httpClient.get<Pizza[]>(`${this.uri}`+'/pizza-list'); 
   }
   getAPizzas():Observable<Pizza[]>{
    return this.httpClient.get<Pizza[]>(`${this.uri}`+'/admin/pizza-list'); 
   }
   addToCart(pizza){
    this.pizzas.push(pizza);
    console.log(this.pizzas);
  }
  getCartPizzas(){
    return this.pizzas; 
  }

  public getitems():Observable<Pizza[]>
  {
      return of(this.pizzas);
  }

  deleteFromCart(orderName){
    this.pizzas.pop();
}
updatePizza(pid,price){
  console.log("entered1");
  return this.httpClient.put(`${this.uri}`+'/admin/pizza-list/update/'+pid+'/'+price,{})
  .subscribe(res=>console.log(pid+"updated in database"));
}

addPizza(pid: any, name: any, price: any) {
  throw new Error("Method not implemented.");
}

}
