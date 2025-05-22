import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import {HeaderComponent} from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'single-page-app';
  name = '';
  message = '';

  submitForm() {
    this.message = `Hello, ${this.name}!`;
  }
}
