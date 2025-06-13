import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  uName= "admin";
  pWorld= "admin";


  loginService(userName:any, passWord:any){
    if(userName === this.uName && passWord === this.pWorld){
      alert("Login Successful");
    }
    else{
      alert("Login Failed");
    }
  }
}
