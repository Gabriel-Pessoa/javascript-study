// Diretiva que altera comportamento ou estilo, nesse caso, estilo.
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#e35e6b';
  }

}
