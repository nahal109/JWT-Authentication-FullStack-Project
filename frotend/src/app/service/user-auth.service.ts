import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }
  public setRolse(rolse: []){
    localStorage.setItem('rolse', JSON.stringify(rolse));
  }
  public getRolse():[]{
    return JSON.parse(<string>localStorage.getItem('rolse'));
  }
  public setToken(jwtToken: string){
    localStorage.setItem('jwtToken', jwtToken);
  }
  public getToken():string{
    return <string>localStorage.getItem('jwtToken');
  }
  public clare(){
    localStorage.clear();
  }
  public isLoggedIn(){
    return this.getRolse() && this.getToken();
  }

}
