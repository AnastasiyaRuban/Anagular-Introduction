import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  template: `
  <div>
    <a>Dropdown option one</a><br>
    <a>Dropdown option two</a><br>
    <a>Dropdown option three</a>
  </div>
  `,
  styles: []
})


export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
