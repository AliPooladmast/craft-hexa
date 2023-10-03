import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    alert('an unexpected error happend');
    console.log(error);
  }
}
