import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {response, } from 'express';
import {UserAuthService} from '../../service/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService,
              private userAuthService: UserAuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }


  login(loginForm: NgForm) {
    console.log("form is submitted");
    console.log(loginForm.value);
    this.userService.login(loginForm.value).subscribe(
      (response:any) => {
 //       console.log(response.jwtToken);
 //       console.log(response.user.role);
        this.userAuthService.setToken(response.jwtToken);
        this.userAuthService.setRolse(response.user.role);

        const role = response.user.role[0].roleName;
        if (role === 'Admin'){
          this.router.navigate(['/admin'])
        }else {
          this.router.navigate(['/user'])
        }
      },
      (error) => {
        console.log(error)
      }
    )
  }

}


