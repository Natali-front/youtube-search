import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStylefav]'
})
export class StylefavDirective {
@Input('appStylefav') color: string = 'red'

  constructor(private el:ElementRef, private r: Renderer2) { 
  }
  @HostListener('click') onClick(event: Element) {
    this.r.setStyle(this.el.nativeElement, 'color', this.color)
  }

}
