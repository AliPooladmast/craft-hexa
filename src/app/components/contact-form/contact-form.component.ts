import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Address' },
    { id: 3, name: 'Phone' },
  ];

  log(value: any) {
    console.log(value);
  }

  submit(form: any) {
    console.log(form);
  }
}
