import {Component, HostListener, OnInit} from '@angular/core';
import {PortfolioService} from '../services/portfolio.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';


@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  octoniusImages = [
    '/assets/images/oct-activity.png',
    '/assets/images/oct-kanban.png',
    '/assets/images/oct-calendar.png',
    '/assets/images/oct-home.png'];

  smartfitImages = [
    '/assets/images/sf-schedule-2.png',
    '/assets/images/sf-chart.png',
    '/assets/images/sf-exercise.png',
    '/assets/images/sf-chat.png',
    '/assets/images/sf-nav.png'
  ];

  hpImages = [
    '/assets/images/hp-home.png',
    '/assets/images/hp-home-2.png',
    '/assets/images/hp-map.png',
    '/assets/images/hp-forum.png',
    '/assets/images/hp-chat.png',
    '/assets/images/hp-login.png',
  ];

  innerWidth: number;

  paddingTop = 5;

  imagesLoaded = 0;

  octoniusInfo = false;
  smartfitInfo = false;
  hpwuInfo = false;

  animationsReady = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  constructor(private portfolioService: PortfolioService, private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    this.ngxService.start();

    this.innerWidth = window.innerWidth;

    this.portfolioService.toggleNav
      .subscribe((res: {status}) => {
        this.changeStyle(res.status);
      });
  }

  changeStyle(status) {
    this.paddingTop = status === 'open' ? 15 : 5;
  }

  imgLoaded() {
    this.imagesLoaded++;

    if (this.imagesLoaded === 3) {
      this.ngxService.stop();
      this.animationsReady = true;
    }
  }


  toggleInfo(type) {
    this[type] = !this[type];
  }

}
