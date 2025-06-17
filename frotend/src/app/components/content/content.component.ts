import {Component, ViewChild} from '@angular/core';
import {Router} from 'express';
import {MenuService} from '../../service/menu.service';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-content',
  standalone: false,
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  opened = true;

  constructor(private menuService: MenuService) {
    this.menuService.isOpened.subscribe(data => {
      this.opened = data;
    })
  }



}
