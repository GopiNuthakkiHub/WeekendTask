import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerlistComponent } from './Components/customerlist/customerlist.component';
import { HomeComponent } from './Components/home/home.component';
import { IetemsComponent } from './Components/listofietems/ietems/ietems.component';
import { ListofietemsComponent } from './Components/listofietems/listofietems.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductlistComponent } from './Components/productlist/productlist.component';
import { ProductComponent } from './Components/Products/product/product.component';
import { UserComponent } from './Components/Users/user/user.component';
import { UsersComponent } from './Components/Users/users.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Navbar',component:NavbarComponent},
  {path:'Productlist',component:ProductlistComponent},
  {path:'Customerlist',component:CustomerlistComponent},
  {path:'user',component:UserComponent},
  {path:'product',component:ProductComponent},
  {path:'users',component:UsersComponent},
  {path:'ietems',component:IetemsComponent},
  {path:'listofietems',component:ListofietemsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
