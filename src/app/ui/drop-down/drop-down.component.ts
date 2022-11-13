import { Component, HostListener, Input, OnInit } from '@angular/core';

type menuTriggerTypes = 'click' | 'hover'


@Component({
  selector: 'app-drop-down',
  template: `
    <div class="dropdown">
      <div>
        <app-button
        [text]="'Dropdown Button'"
        [color]="'primary'"
        [size]="'small'"
        [isActive]="isOpen"
        (click) = 'changeOpenedState()'>
      </app-button>
      </div>

      <div class="menu-wrapper" *ngIf="isOpen">
        <app-menu></app-menu>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class DropDownComponent implements OnInit {

  @Input() isOpen = false;
  @Input() menuTriggerType: menuTriggerTypes = 'hover'

  constructor() { }

  ngOnInit(): void {
  }

  changeOpenedState() {
    if (this.menuTriggerType === 'click') {
      this.isOpen = !this.isOpen
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.menuTriggerType === 'hover') {
      this.isOpen = true
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.menuTriggerType === 'hover') {
      this.isOpen = false
    }
  }

}
