import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlight {

  constructor(private el: ElementRef, private rd: Renderer2) { }
  @HostListener('mouseenter') onEnter() {
    this.rd.setStyle(this.el.nativeElement, 'transform', 'translateY(-3px)');
    this.rd.setStyle(this.el.nativeElement, 'box-shadow', '0 8px 24px rgba(0,0,0,.15)');
    this.rd.setStyle(this.el.nativeElement, 'transition', 'all .2s ease');
  }

  @HostListener('mouseleave') onLeave() {
    this.rd.removeStyle(this.el.nativeElement, 'transform');
    this.rd.removeStyle(this.el.nativeElement, 'box-shadow');
  }
}
