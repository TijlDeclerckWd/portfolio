import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  openModal = new Subject();
  toggleNav = new Subject();
  BASE_API_URL = environment.BASE_API_URL;

  constructor(private http: HttpClient) {
    console.log('is production?', environment.production);
  }

  downloadResume() {
    return this.http.get(`${this.BASE_API_URL}/file/downloadFile/CV-English.pdf`, {responseType: 'blob' });
  }

}
