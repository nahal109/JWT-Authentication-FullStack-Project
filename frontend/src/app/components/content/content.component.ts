import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-content',
  template: '<router-outlet></router-outlet>',
  imports: [
    RouterOutlet
  ],
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
}
