import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 @Input()user:any={}
 
 showDec=true
 
  constructor() { }

  ngOnInit(): void {
  }

  showDescription(){
    this.showDec=!this.showDec
  }

}
