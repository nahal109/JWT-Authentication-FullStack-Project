import {Component, ViewChild} from '@angular/core';
import {version} from 'node:os';
import {MenuService} from '../../service/menu.service';
import {Router} from '@angular/router';
import {UserAuthService} from '../../service/user-auth.service';
import {UserService} from '../../service/user.service';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // @ViewChild('drawer') drawer!: MatSidenav;
  constructor(private menuService: MenuService,
              private UserAuthService: UserAuthService,
              private router: Router,
              public UserService: UserService, ) {
  }
  toggalMenu(){
    this.menuService.toggle();
  }

  public isLoggedIn(){
    return this.UserAuthService.isLoggedIn();
  }
  public logout(){
    this.UserAuthService.clare();
    this.router.navigate(['/home']);

  }
}

