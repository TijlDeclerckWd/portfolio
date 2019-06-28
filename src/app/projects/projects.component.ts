import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectImagePreload = "/assets/images/smartfit-home.png";
  bgImagePreload = "/assets/images/desk-3.png";

  bgImageLoaded: string;
  projectImageLoaded: string;

  constructor() { }

  ngOnInit() {
  }

  determineBgImg() {
    return `linear-gradient(to right, rgba(#fff, .8), rgba(#ddd, .8)),  url(${this.bgImageLoaded})`;
  }

}
