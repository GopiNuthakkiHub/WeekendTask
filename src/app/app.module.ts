import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductlistComponent } from './Components/productlist/productlist.component';
import { CustomerlistComponent } from './Components/customerlist/customerlist.component';
import { ProductComponent } from './Components/Products/product/product.component';
import { UserComponent } from './Components/Users/user/user.component';
import { UsersComponent } from './Components/Users/users.component';
import { BootnavbarComponent } from './Components/bootnavbar/bootnavbar.component';
import { ListofietemsComponent } from './Components/listofietems/listofietems.component';
import { IetemsComponent } from './Components/listofietems/ietems/ietems.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductlistComponent,
    CustomerlistComponent,
    ProductComponent,
    UserComponent,
    UsersComponent,
    BootnavbarComponent,
    ListofietemsComponent,
    IetemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
