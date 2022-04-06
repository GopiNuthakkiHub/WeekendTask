import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   title='counter';
   counter=0;
  @Input() product:any={} 
  showextended=true;
  currentStyles={}
  constructor() { }

  ngOnInit(): void {
  }
  setShowExtended(){
    this.showextended =!this.showextended
    this.setcurrentStyles()
    
   }
   setcurrentStyles(){
   
   this.currentStyles={
     'padding-top':this.showextended ?'0' :'60px',
     'color':this.showextended ? 'red' :'blue',
     'cursor':'pointer'
   }
   }
   count(value:string){
     switch(value){
     case '+':
       this.counter++;
       break;
       case '-':
      this.counter--;
    }
  }
  }
