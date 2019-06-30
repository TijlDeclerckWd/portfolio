import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  innerWidth: number;

  imgUrl;
  imgPreloadUrl = '/assets/images/home-background-10-b.png';

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  constructor() { }

  ngOnInit() {
   this.innerWidth = window.innerWidth;
  }

  determineBackground() {
    return `linear-gradient(to bottom right, rgba(60,85,130,.2), rgba(9,34,79,.2)), url(${this.imgUrl})`;
  }

  getMarginTop(num) {
    if (this.innerWidth < 350) {
      if (num === 1) {
        return -7;
      } else {
        return 0;
      }
    } else if (this.innerWidth < 580) {
      if (num === 1 || num === 2) {
        return -7;
      } else {
        return 0;
      }
    } else {
      return -7;
    }
  }

  setImgUrl() {
      this.imgUrl = this.imgPreloadUrl;
  }

}
