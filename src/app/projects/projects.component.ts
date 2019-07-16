import {Component, HostListener, OnInit} from '@angular/core';
import {PortfolioService} from '../services/portfolio.service';


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
    '/assets/images/hp-map-2.png',
    '/assets/images/hp-forum.png',
    '/assets/images/hp-chat.png',
    '/assets/images/hp-login.png',
  ];

  innerWidth: number;

  paddingTop = 5;

  loaded = false;

  octoniusInfo = false;
  smartfitInfo = false;
  hpwuInfo = false;

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

  changeStyle(status) {
    this.paddingTop = status === 'open' ? 15 : 5;
  }

  toggleInfo(type) {
    this[type] = !this[type];
  }

}
