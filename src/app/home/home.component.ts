import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  innerWidth: number;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }


  constructor() { }

  ngOnInit() {
   this.innerWidth = window.innerWidth;
  }

  getMarginTop(num) {
    if (this.innerWidth < 350) {
      if (num === 1) {
        return -10;
      } else {
        return 0;
      }
    } else if (this.innerWidth < 580) {
      if (num === 1 || num === 2) {
        return -10;
      } else {
        return 0;
      }
    } else {
      return -10;
    }
  }

}
