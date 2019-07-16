import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input('images') images = [];
  @Output('imgLoaded') imgLoaded = new EventEmitter();


  imgWidths: number;
  imgHeights: number;

  constructor(private _http: HttpClient) {}

  ngOnInit() {}

  setHeight(img) {
    if (!this.imgHeights) {
      this.imgLoaded.emit()
      this.imgWidths = img.getBoundingClientRect().width;
      console.log('width', img.getBoundingClientRect().width);
      this.imgHeights = this.imgWidths * 0.58;
      console.log(this.imgHeights);
    }
  }
}
