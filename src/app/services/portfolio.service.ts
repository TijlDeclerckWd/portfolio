import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  openModal = new Subject();

  constructor() { }

}
