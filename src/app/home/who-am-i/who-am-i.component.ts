import { Component, OnInit } from '@angular/core';
import {PortfolioService} from '../../services/portfolio.service';

@Component({
  selector: 'who-am-i',
  templateUrl: './who-am-i.component.html',
  styleUrls: ['./who-am-i.component.scss']
})
export class WhoAmIComponent implements OnInit {

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
  }

  openModal() {
    this.portfolioService.openModal.next();
  }

}
