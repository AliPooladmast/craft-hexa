import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
})
export class InputFormatDirective {
  constructor(private el: ElementRef) {}
  @Input('appInputFormat') appInputFormat = '';

  @HostListener('blur') onFocus() {
    const value: string = this.el.nativeElement.value;
    if (this.appInputFormat === 'uppercase') {
      this.el.nativeElement.value = value.toUpperCase();
    } else {
      this.el.nativeElement.value = value.toLowerCase();
    }
  }
}
