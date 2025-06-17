import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UserAuthService} from '../service/user-auth.service';
import {UserService} from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private UserAuthService: UserAuthService,
              private UserService: UserService,) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean| UrlTree>| Promise<boolean| UrlTree>| boolean| UrlTree {
    if(this.UserAuthService.getToken() !== null){
      const role = route.data["roles"] as Array<String>;
      if(role){
        const match = this.UserService.roleEqual(role);
        if(match){
          return true;
        } else {
          this.router.navigate(['/forbidden']);
          return false;
        }
      }
    }
    this.router.navigate(['/login']);
    return false;
  }
}
