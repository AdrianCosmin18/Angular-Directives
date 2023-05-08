import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'red';
  @Input() highlightColor: string = 'yellow';
  //peste tot in cod se va inlocui sintaxa:
  // element.nativeElement.style.backgroundColor (cu)-> this.color => scriem mai putin cod
  //la liniile unde se afla HostListener unde setam backgorund color-ul
  @HostBinding('style.backgroundColor') color: string | undefined;
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   'background-color',
    //   'green'
    // );
  }

  //mouseenter-> este tipul de event in care fac hover
  @HostListener('mouseenter') onMouseOver(event: Event){
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      // 'red'
      this.highlightColor
    );
    // this.color = 'red';
  }

  //mouseleave->tipul de event cand parasesc casuta lui dupa ce am facut hover
  @HostListener('mouseleave') onMouseLeave(event: Event){
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      // 'yellow'
      this.defaultColor
    );
  }

  //click->event normal de click
  @HostListener('click') onClick(event: Event){
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'green'
    );
  }

}
