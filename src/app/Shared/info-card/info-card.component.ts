import { Component, OnInit, Input } from '@angular/core';
import {IcardInfo} from '../../Interfaces/icard-info'

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  @Input("cardContent") content: IcardInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
