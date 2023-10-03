import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
  static oldPasswordMatch(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value !== '1234') {
          resolve({ oldPasswordMatch: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

  static passwordsShouldMatch(
    control: AbstractControl
  ): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password?.value !== confirmPassword?.value) {
      return { passwordsShouldMatch: true };
    } else {
      return null;
    }
  }
}
