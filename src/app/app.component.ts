import { environment } from './../environments/environment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eshop';
  inCart = 0;
  apiUrl = `${environment.api}`;

  addToCart() {
    this.inCart += 1
  }
  removeFromCart() {
    // if (this.inCart === 0) return
    // else this.inCart -= 1

    this.inCart > 0 ? this.inCart -= 1 : this.inCart
  }
}
