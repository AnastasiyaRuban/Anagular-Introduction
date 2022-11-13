import { environment } from './../environments/environment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eshop';
  apiUrl = `${environment.api}`;
  // buttonColor = 'default';
  // buttonSize = 'default';
  // buttonIsActive: null;
  // buttonIsDisabled: null;
}
