import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private _ElementRef: ElementRef ) {
    console.log('directiva llamada');

  }

  // tslint:disable-next-line:no-input-rename
  @Input('appResaltado') nuevocolor: string;

  @HostListener('mouseenter') ratonEntro() {

    console.log(this.nuevocolor);

    this.resaltar( this.nuevocolor || 'yellow' );
    // this._ElementRef.nativeElement.style.backgroundColor = 'yellow';

  }
  @HostListener('mouseleave') ratonSalio() {

    this.resaltar( null );
    // this._ElementRef.nativeElement.style.backgroundColor = null;

  }

  private resaltar( color: string ) {
    this._ElementRef.nativeElement.style.backgroundColor = color;
  }
}
