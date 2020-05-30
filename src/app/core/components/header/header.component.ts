import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  active= false;
  constructor() { }

  ngOnInit(): void {
  }

  toogleClass(){
    console.log("clicked")
    this.active = !this.active;
  }

}
