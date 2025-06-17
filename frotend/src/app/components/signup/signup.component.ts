import {Component, OnInit} from '@angular/core';
import {Signup} from '../../dto/signup';
import {register} from 'node:module';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';




@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {

  signup: Signup = {
    userName:'',
    userFirstName:'',
    userLastName:'',
    userPassword:'',
    userRole:'user'
  }



  constructor(private UserService : UserService,
              private router: Router,
              private toastr: ToastrService,) { }

  ngOnInit(): void { }

  register(){
    this.UserService.registerNewUser(this.signup).subscribe(
      (response) => {
        this.toastr.success('User registered successfully!','success');
        this.router.navigate(['/login']);
        console.log(this.signup);

      },
      (error) => {
        this.toastr.error('Error registering user!','error');
        this.router.navigate(['']);

      }
    );
 //   console.log(this.signup);
  }

  protected readonly require = require;
}
