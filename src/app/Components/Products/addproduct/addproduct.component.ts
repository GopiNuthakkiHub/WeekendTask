import { Component, Input, OnInit } from '@angular/core';
import { product } from '../Models/product';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
@Input()product!:product
  myproduct:product={
    id:0,
    title:'',
    price:0,
    description:'',
    category:'',
    image:'',
    rating:{
        rate:0,
        count:0,
    },
        promotion:false
  }
  constructor() { }

  ngOnInit(): void {
  }

}
