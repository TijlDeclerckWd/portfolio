import {Component, HostListener, OnInit} from '@angular/core';
import {PortfolioService} from '../services/portfolio.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectImagePreload = "/assets/images/octonius.png";
  bgImagePreload = "/assets/images/desk-3.png";

  innerWidth: number;

  paddingTop = 5;

  bgImageLoaded: string;
  projectImageLoaded: string;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;

    this.portfolioService.toggleNav
      .subscribe((res: {status}) => {
        this.changeStyle(res.status);
      });
  }

  calculatePaddingTop() {
    if (this.innerWidth > 900) {
      return 15;
    } else {
      return this.paddingTop;
    }
  }

  changeStyle(status) {
    this.paddingTop = status === 'open' ? 15 : 5;
  }



  determineBgImg() {
    return `linear-gradient(to right, rgba(#fff, .8), rgba(#ddd, .8)),  url(${this.bgImageLoaded})`;
  }

}
