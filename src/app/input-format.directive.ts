import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format;
  @HostListener('blur') onblur(){
    console.log("blur");
    if(this.format == 'uppercase'){
      let value:string = this.el.nativeElement.value;
      this.el.nativeElement.value = value.toUpperCase();
    }
  }
  constructor(private el: ElementRef) { }

}
