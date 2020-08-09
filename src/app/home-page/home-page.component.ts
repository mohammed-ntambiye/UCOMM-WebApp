import { Component, OnInit } from '@angular/core';
import { IcardInfo } from "../Interfaces/IcardInfo";
import *  as  data from './config.json';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
    touchDrag: true,
    autoHeight: true,
    autoWidth: true,
    pullDrag: true,
    dots: true,
    autoplaySpeed: 1,
    margin: 5,
    navSpeed: 700,
    responsive: {
      0: { 
        items: 1 
      },
      600: { 
        items: 2 
      },
      1000: { 
        items: 3 
      }
    }
  }
  public cardContent: IcardInfo[] = [
    {
      Title: data.AboutUs.Title,
      Content: data.AboutUs.Content,
      ImageUrl: data.AboutUs.ImageUrl,
      Src: data.AboutUs.Src,
      StylingClass : data.AboutUs.StylingClass
    },
    {
      Title: data.Aim.Title,
      Content: data.Aim.Content,
      ImageUrl: data.Aim.ImageUrl,
      Src: data.Aim.Src,
      StylingClass : data.Aim.StylingClass
    },
    {
      Title: data.Donations.Title,
      Content: data.Donations.Content,
      ImageUrl: data.Donations.ImageUrl,
      Src: data.Donations.Src,
      StylingClass : data.Donations.StylingClass
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
