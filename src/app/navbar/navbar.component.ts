import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, ValidationErrors, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {NotifierService} from 'angular-notifier';
import {PortfolioService} from '../services/portfolio.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  modalRef;
  contactForm;
  private notifier: NotifierService;
  disabledForm = false;
  innerWidth;

  @ViewChild('content', { static: true }) content;
  @ViewChild('toggler', { static: true }) toggler;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  get f() {
    return this.contactForm;
  }

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private http: HttpClient,
    private notifierService: NotifierService,
    private portfolioService: PortfolioService) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.portfolioService.openModal.subscribe(() => {
      this.openModal();
    });

    this.innerWidth = window.innerWidth;
  }

  closeNav() {
    if (this.innerWidth < 900) {
      this.toggler.nativeElement.click();
    }
  }

  disableForm() {
    this.disabledForm = true;
  }

  openModal() {
    this.initiateForm();
    this.modalRef = this.modalService.open(this.content, { centered: true });
  }

  initiateForm() {
    this.contactForm = this.fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', Validators.required],
      'company': [''],
      'message': ['', Validators.required]
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      const data = this.contactForm.value;

      this.disableForm();

      this.http.post(`${environment.BASE_API_URL}/mail/sendMail`, data)
        .subscribe((res: { complete: boolean, message: string }) => {
          if (res.complete) {
            this.notifier.notify('success', 'Successfully contacted Tijl Declerck');
            this.modalRef.close();
            this.disabledForm = false;
            this.resetForm();
          } else {
            this.notifier.notify('error', 'Oops! Something went wrong, please try again');
            this.disabledForm = false;
          }
        }, (err) => {
          this.notifier.notify('error', 'Oops! Something went wrong, please try again later');
          this.disabledForm = false;
        });
    } else {
      this.notifier.notify('error', 'Please make sure you have completed all the required fields');
    }
  }

  resetForm() {
    this.contactForm.reset();
  }

  // getFormValidationErrors() {
  //   Object.keys(this.contactForm.controls).forEach(key => {
  //     console.log('key', this.f.get(key));
  //   });
  // }
}
