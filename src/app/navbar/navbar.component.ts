import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, ValidationErrors, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {NotifierService} from 'angular-notifier';
import {PortfolioService} from '../services/portfolio.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  modalRef;
  contactForm;
  private notifier: NotifierService;

  @ViewChild('content') content;

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
      // const data =
      console.log('submitting the form', this.contactForm.value);
      const data = this.contactForm.value;

      this.http.post('http://localhost:3000/api/mail/sendMail', data)
        .subscribe((res: { complete: boolean, message: string }) => {
          if (res.complete) {
            this.notifier.notify('success', 'Successfully contacted Tijl Declerck');
            this.modalRef.close();
            this.resetForm();
          } else {
            this.notifier.notify('error', 'Oops! Something went wrong, please try again');
          }
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
