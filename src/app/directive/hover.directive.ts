import { Directive, ElementRef, HostListener , OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  constructor(public element: ElementRef) {

  }

  ngOnInit(): void{
    this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseover') onmouseover() {
    this.element.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('mouseout') onmouseout() {
    this.element.nativeElement.style.backgroundColor = 'white';
  }
  
  @HostListener('click') onclick() {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }

}
