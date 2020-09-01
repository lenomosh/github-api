import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appLoadingColorChange]'
})
export class LoadingColorChangeDirective {

  constructor() { }
  colors = [
    'red', 'orange', 'yellow', 'green', 'blue',
    'purple', 'violet'
  ];

  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;

  @HostListener('hover') changeColor  = () =>
    (this.color = this.borderColor = this.colors[Math.floor(Math.random() * this.color.length)])
}
