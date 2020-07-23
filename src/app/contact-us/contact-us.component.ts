import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactUsForm: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.contactUsForm = new FormGroup({
      Names: new FormControl('',
        [
          Validators.required,
          Validators.minLength(1)
        ]),
      Email: new FormControl('',
        [
          Validators.email,
          Validators.required]
      ),
      Message: new FormControl('',
        [
          Validators.required,
          Validators.minLength(4)
        ])
    });
  }

  public validateNames() {
    return !this.contactUsForm.controls.Names.valid &&
      (this.contactUsForm.controls.Names.dirty ||
        this.contactUsForm.controls.Names.touched)
  }

  public validateEmail() {
    return !this.contactUsForm.controls.Email.valid &&
      (this.contactUsForm.controls.Email.dirty ||
        this.contactUsForm.controls.Email.touched)
  }

  public validateMessage() {
    return !this.contactUsForm.controls.Message.valid &&
      (this.contactUsForm.controls.Message.dirty ||
        this.contactUsForm.controls.Message.touched)
  }

  onSubmit() {
    console.warn(this.contactUsForm.value);
  }
}