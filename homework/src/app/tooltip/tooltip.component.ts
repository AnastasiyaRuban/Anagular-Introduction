import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `
    <p>
      tooltip works!
    </p>
  `,
  styles: [
  ]
})
export class TooltipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
