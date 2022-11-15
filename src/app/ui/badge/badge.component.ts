import { Component, Input, OnInit } from '@angular/core';
import { ProductBadge } from 'src/app/types/card';
// [style.backgroundColor] = 'info.color'
@Component({
  selector: 'app-badge',
  template: `
    <div class="card__badge"
    [style.backgroundColor] = 'infoBadge.color'
    >{{infoBadge.text}}</div>
  `,
  styles: [
    `.card__badge {
        position: absolute;
        top: 1%;
        width: fit-content;
        padding: 2px 5px;
        color: white;
        border-radius: 0.375rem;
        }`
  ]
})
export class BadgeComponent implements OnInit {
  @Input() infoBadge: ProductBadge

  constructor() { }

  ngOnInit(): void {
  }



}


