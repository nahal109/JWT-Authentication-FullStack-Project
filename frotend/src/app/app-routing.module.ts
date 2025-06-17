import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AdminComponent} from './components/admin/admin.component';
import {UserComponent} from './components/user/user.component';
import {LoginComponent} from './components/login/login.component';
import {ForbiddenComponent} from './components/forbidden/forbidden.component';
import {AComponent} from './components/a/a.component';
import {AuthGuard} from './auth/auth.guard';
import {SignupComponent} from './components/signup/signup.component';

const routes: Routes = [

  {path: 'a', component: AComponent },
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: ['Admin']}},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard], data: { roles: ['User']}},
  {path: 'login', component: LoginComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: 'signup', component: SignupComponent},

  // ⬇️ Default route: redirect '' to 'a'
  {path: '', redirectTo: 'home', pathMatch: 'full' },

  // ⬇️ Optional: Wildcard route to handle not found
 { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
