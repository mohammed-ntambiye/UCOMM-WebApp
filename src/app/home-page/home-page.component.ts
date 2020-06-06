import { Component, OnInit } from '@angular/core';
import { IcardInfo } from '../Interfaces/icard-info'
import *  as  data from './config.json';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public cardContent: IcardInfo[] = [
    {
      Title: data.AboutUs.Title,
      Content: data.AboutUs.Content,
      ImageUrl: data.AboutUs.ImageUrl,
      src: data.AboutUs.src
    },
    {
      Title: data.Aim.Title,
      Content: data.Aim.Content,
      ImageUrl: data.Aim.ImageUrl,
      src: data.Aim.src
    },
    {
      Title: data.Donations.Title,
      Content: data.Donations.Content,
      ImageUrl: data.Donations.ImageUrl,
      src: data.Donations.src
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
