import { Component, OnInit } from '@angular/core';
import { IPersoninfo } from "../Interfaces/IPersoninfo";

@Component({
  selector: 'app-meet-the-team',
  templateUrl: './meet-the-team.component.html',
  styleUrls: ['./meet-the-team.component.scss']
})
export class MeetTheTeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public MainBoardMembers: IPersoninfo[] = [
    {
      Name: "Rehema",
      Title: "Chairperson",
      ImageName: "screen-shot-2016-09-15-at-12-38-04.png",
    },
    {
      Name: "Allan",
      Title: "Treasurer",
      ImageName: "Treasurer.png",
    },

    {
      Name: "Enoch",
      Title: "Secretary",
      ImageName: "Secretary.png",
    }
  ];

  public SecondaryBoardMembers: IPersoninfo[] = [
    {
      Name: "Esther",
      Title: "Education & Training",
      ImageName: "Education.png",
    },
    {
      Name: "Betty",
      Title: "Women & Children",
      ImageName: "women.png",
    },
    {
      Name: "Mr. Kasagga",
      Title: "Chief Mobiliser",
      ImageName: "Mobiliser.png",
    },
    {
      Name: "Open Vacancy",
      Title: "Project Manager",
      ImageName: "vacant-position_orig.jpg",
    }
  ];

}
