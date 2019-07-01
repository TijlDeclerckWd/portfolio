import {Component, HostListener, OnInit} from '@angular/core';
import {PortfolioService} from '../services/portfolio.service';

@Component({
  selector: 'references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {
  paddingTop = 5;
  innerWidth: number;

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

}
