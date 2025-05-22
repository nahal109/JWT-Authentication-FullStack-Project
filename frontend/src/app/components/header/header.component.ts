import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../service/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems: any[] = [];
  isMenuOpen = false;

  constructor(private menuService: MenuService, private router: Router) { }

  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
    this.isMenuOpen = false; // Menu එක click කරාම වහන්න
  }
}
