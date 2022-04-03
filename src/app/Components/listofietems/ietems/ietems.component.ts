import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ietems',
  templateUrl: './ietems.component.html',
  styleUrls: ['./ietems.component.css']
})
export class IetemsComponent implements OnInit {
@Input() ietem:any={}
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
}
