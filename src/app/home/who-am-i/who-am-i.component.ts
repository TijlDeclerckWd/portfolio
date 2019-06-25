import { Component, OnInit } from '@angular/core';
import {PortfolioService} from '../../services/portfolio.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'who-am-i',
  templateUrl: './who-am-i.component.html',
  styleUrls: ['./who-am-i.component.scss']
})
export class WhoAmIComponent implements OnInit {

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {}

  downloadResume() {
    this.portfolioService.downloadResume()
      .subscribe((file) => {
        console.log('file', file);
        saveAs(file, 'CV Tijl Declerck');
      });


  }

}
