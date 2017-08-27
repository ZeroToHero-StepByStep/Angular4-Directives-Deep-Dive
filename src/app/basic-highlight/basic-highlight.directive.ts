import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {
  constructor( private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = 'blue' ;
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'red' ;
  }
}
