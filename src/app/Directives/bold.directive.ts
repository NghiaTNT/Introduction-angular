import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  constructor(private element: ElementRef, private render:Renderer2) {
    // element.nativeElement.style.color = 'green';
    render.setStyle(element.nativeElement, 'color', '#b87333')
  }

}

