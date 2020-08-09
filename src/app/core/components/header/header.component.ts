import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  active = false;
  constructor() { }

  ngOnInit(): void {
  }

  toogleClass() {
    this.active = !this.active;
  }

  @HostListener("click", ["$event"])
  public onListenerTriggered(event: any): void {
    let clickedItem = event.target.classList;
    if (clickedItem.contains('navbar-link') || clickedItem.contains('navbar-item')) {
      this.toogleClass();
    }
  }
}
