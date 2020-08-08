import { Component, OnInit, Input } from '@angular/core';
import { IPersoninfo } from "../../Interfaces/IPersoninfo";

@Component({
  selector: 'app-person-info-card',
  templateUrl: './person-info-card.component.html',
  styleUrls: ['./person-info-card.component.css']
})
export class PersonInfoCardComponent implements OnInit {

  @Input("cardContent") content: IPersoninfo;
  @Input("size") containerSize: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.containerSize)
  }

}
