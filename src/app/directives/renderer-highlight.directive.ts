import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective implements OnInit{

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'green'
    );
  }

  @HostListener('mouseenter') onMouseOver(event: Event){
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'red'
    );
  }

  @HostListener('mouseleave') onMouseLeave(event: Event){
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'yellow'
    );
  }

  @HostListener('click') onClick(event: Event){
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'grey'
    );
  }

}
