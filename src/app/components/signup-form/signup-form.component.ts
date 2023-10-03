import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UsernameValidators } from './username.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  form;

  // new FormGroup({
  //   account: new FormGroup({
  //     username: new FormControl(
  //       '',
  //       [
  //         Validators.required,
  //         Validators.minLength(3),
  //         UsernameValidators.cantHaveSpace,
  //       ],
  //       UsernameValidators.shouldBeUnique
  //     ),
  //     password: new FormControl('', Validators.required),
  //   }),
  // });

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      account: fb.group({
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            UsernameValidators.cantHaveSpace,
          ],
          UsernameValidators.shouldBeUnique,
        ],
        password: ['', Validators.required],
      }),
    });
  }

  get username() {
    return this.form.get('account.username');
  }

  login() {
    this.form.setErrors({
      invalidLogin: true,
    });
  }
}
