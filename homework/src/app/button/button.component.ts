import { Component, Input, OnInit } from '@angular/core';


type buttonColors = 'default' | 'primary' | 'accent' | 'success' | 'warning';
type buttonSize = 'default' | 'large' | 'small';
type buttonIsActive = false | true;
type buttonIsDisabled = '' | null;


@Component({
  selector: 'app-button',
  template: `
    <button [ngClass]="">Button</button>
  `,
  styles: [
  ]
})
export class ButtonComponent implements OnInit {
  @Input() color: buttonColors = 'default';
  @Input() size: buttonSize = 'default';
  @Input() isActive: buttonIsActive = false;
  @Input() isDisabled: buttonIsDisabled = '';

  constructor() { }

  ngOnInit(): void {
  }

}
