import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validator';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group(
      {
        oldPassword: [
          '',
          Validators.required,
          PasswordValidators.oldPasswordMatch,
        ],
        password: ['', Validators.required],
        confirmPassword: ['', [Validators.required]],
      },
      { validator: PasswordValidators.passwordsShouldMatch }
    );
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  changePass() {
    console.log('password is changed');
  }
}
