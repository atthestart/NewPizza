import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzashopComponent } from './pizzashop/pizzashop.component';
import { PizzaListComponent } from './pizzashop/pizza-list/pizza-list.component';
import { PizzaAddComponent } from './pizzashop/pizza-add/pizza-add.component';
import { PizzaDeleteComponent } from './pizzashop/pizza-delete/pizza-delete.component';
import { AngularWebStorageModule } from 'angular-web-storage';
import { AdminAddComponent } from './admin/admin-add/admin-add.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { AdminGetComponent } from './admin/admin-get/admin-get.component';
import { AdminDeleteComponent } from './admin/admin-delete/admin-delete.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PizzashopComponent,
    PizzaListComponent,
    PizzaAddComponent,
    PizzaDeleteComponent,
    AdminAddComponent,
    AdminEditComponent,
    AdminGetComponent,
    AdminDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularWebStorageModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
