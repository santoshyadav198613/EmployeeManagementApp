import { HoverDirective } from './hover.directive';
import { ElementRef } from '@angular/core';

describe('HoverDirective', () => {
  it('should create an instance', () => {
    let element: ElementRef;
    const directive = new HoverDirective(element);
    expect(directive).toBeTruthy();
  });
});
