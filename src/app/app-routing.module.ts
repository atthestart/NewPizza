import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaAddComponent } from './pizzashop/pizza-add/pizza-add.component';
import { PizzaListComponent } from './pizzashop/pizza-list/pizza-list.component';
import { PizzaDeleteComponent } from './pizzashop/pizza-delete/pizza-delete.component';
import { AdminGetComponent } from './admin/admin-get/admin-get.component';
import { AdminAddComponent } from './admin/admin-add/admin-add.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';

const routes: Routes = [
  {path:'pizza/pizza-list/cart',component:PizzaAddComponent},
  {path:'pizza/pizza-list/cart/delete',component:PizzaDeleteComponent},
  {path:'pizza/pizza-list',component:PizzaListComponent},
  {path:'pizza/admin/pizza-list',component:AdminGetComponent},
  {path:'pizza/admin/pizza-list/addPizza',component:AdminAddComponent},
  {path:'pizza/admin/pizza-list/update/:pid/:price',component:AdminEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
