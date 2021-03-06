import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {PortfolioService} from '../services/portfolio.service';
import {takeUntil} from 'rxjs/operators';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  innerWidth: number;
  navStatus = 'closed';
  subscription;

  animationsReady = false;

  imgUrl;
  imgPreloadUrl = '/assets/images/home-background-10-sm.png';

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.subscribeToNavStatus();
  }

  constructor(private portfolioService: PortfolioService, private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    this.ngxService.start();
   this.innerWidth = window.innerWidth;

   this.subscribeToNavStatus();
  }

  // determineBackground() {
  //   console.log('determining backgrend img', `linear-gradient(to bottom right, rgba(60,85,130,.2), rgba(9,34,79,.2)), url(${this.imgUrl})`);
  //   return `linear-gradient(to bottom right, rgba(60,85,130,.2), rgba(9,34,79,.2)), url(${this.imgUrl})`;
  // }

  bottomPosition() {
    return this.navStatus === 'open' && this.innerWidth < 900;
  }

  getMarginTop(num) {
 if (this.innerWidth < 600) {
      if (num === 1 ) {
        return -7;
      } else {
        return 0;
      }
    } else {
      return -7;
    }
  }

  setImgUrl() {
    this.imgUrl = `${this.imgPreloadUrl}`;
    this.ngxService.stop();
    this.animationsReady = true;

  }

  subscribeToNavStatus() {
    if (this.innerWidth < 900 && !this.subscription) {
      this.subscription = this.portfolioService.toggleNav
        .subscribe((status: {status}) => {
          this.navStatus = status.status;
        });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
