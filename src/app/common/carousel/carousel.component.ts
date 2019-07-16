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

  ngOnInit() {
    console.log('images', this.images);
    // this._http.get('https://picsum.photos/list')
    //   .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))
    //   .subscribe(images => this.images = images);
  }
  //
  // private _randomImageUrls(images: Array<{id: number}>): Array<string> {
  //   return [1, 2, 3].map(() => {
  //     const randomId = images[Math.floor(Math.random() * images.length)].id;
  //     return `https://picsum.photos/900/500?image=${randomId}`;
  //   });
  // }

  setHeight(img) {

    if (!this.imgHeights) {
      this.imgLoaded.emit();
      this.imgWidths = img.getBoundingClientRect().width;
      console.log('width', img.getBoundingClientRect().width);
      this.imgHeights = this.imgWidths * 0.58;
      console.log(this.imgHeights);
    }
  }
}
