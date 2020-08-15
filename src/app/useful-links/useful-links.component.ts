import { Component, OnInit } from '@angular/core';
import *  as  data from './config.json';

@Component({
  selector: 'app-useful-links',
  templateUrl: './useful-links.component.html',
  styleUrls: ['./useful-links.component.css']
})
export class UsefulLinksComponent implements OnInit {
  linksCharities = null;
  linksTravelTourism = null;
  linksHealthWellbeing = null;
  liksUgandaChurchAssociation=null;
  linksLinksUganda =null;

  constructor() {

  }

  ngOnInit(): void {
   this.linksCharities = data.Charities;
   this.linksTravelTourism =data.TravelTourism;
   this.linksHealthWellbeing = data.HealthWellbeing;
   this.liksUgandaChurchAssociation = data.UgandaChurchAssociation;
   this.linksLinksUganda = data.LinksUganda;
  }

}
