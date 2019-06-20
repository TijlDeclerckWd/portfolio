import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  modalRef;

  contactForm;

  get f() {
    return this.contactForm;
  }

  constructor(private modalService: NgbModal, private fb: FormBuilder) { }

  ngOnInit() {
  }

  openModal(modal) {
    this.initiateForm();
    this.modalRef = this.modalService.open(modal, { centered: true });
  }

  initiateForm() {
    this.contactForm = this.fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'company': [''],
      'message': ['', Validators.required]
    });
  }

  submitForm() {
    console.log(' valid or not', this.contactForm.valid);
    if (this.contactForm.valid) {
      console.log('submitting the form');
    } else {
      console.log('unable to send form');
      this.getFormValidationErrors();
      console.log('textarea value', this.f.get('message'));
    }
  }

  getFormValidationErrors() {
    Object.keys(this.contactForm.controls).forEach(key => {

      console.log('keyzzzz', this.f.get(key));
    });
  }

}
