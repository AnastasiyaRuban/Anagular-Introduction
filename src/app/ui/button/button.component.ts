import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ɵsplitBlock } from '@angular/localize';


type buttonColors = 'default' | 'primary' | 'accent' | 'success' | 'warning';
type buttonSize = 'default' | 'large' | 'small';

@Component({
  selector: 'app-button',
  template: `
    <button class="button-base btn"
    [class.btn-lg]='size === "large"'
    [class.btn-sm]='size === "small"'
    [class.btn-default]='color === "default"'
    [class.btn-primary]='color === "primary"'
    [class.btn-accent]='color === "accent"'
    [class.btn-primary]='color === "primary"'
    [class.btn-success]='color === "success"'
    [class.btn-warning]='color === "warning"'
    [attr.disabled]="isDisabled ? '' : null"
    [class.button-disabled]='isDisabled'
    [class.active]='isActive'
    [ngClass]="innerColor"
    [style.color] = 'color == "default" ? "white" : ""'
    [style.backgroundColor] = 'color == "default" ? "#0099FF
" : ""'
    >{{text}}
    </button>
  `,
  styles: [
    `.btn {
      display: block;
    }`
  ]
})
export class ButtonComponent implements OnInit, OnChanges {

  @Input() text: string = 'Кнопка';
  @Input() color: buttonColors = 'default';
  @Input() size: buttonSize = 'default';
  @Input() isActive: boolean | null = false;
  @Input() isDisabled: boolean | null | '' = false;
  // @Input() size: 'default' | 'large' | 'small' = 'default';

  innerColor: buttonColors = 'default';
  innerSize: buttonSize = 'default';
  // innerSize: 'default' | 'large' | 'small' = 'default';


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const { color, size } = changes;

    if (color && color.currentValue) {
      this.innerColor = color.currentValue
    }

    if (size && size.currentValue) {
      this.innerSize = size.currentValue
    }
  }


  ngOnInit(): void {
  }

}
