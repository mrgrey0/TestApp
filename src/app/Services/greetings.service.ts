import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingsService {

  constructor() { }

  public monday(){
    console.log("Hello, it's Monday!");
  }
  public tuesday(){
    console.log("Hello, it's Tuesday!");
  }
  public wednesday(){
    console.log("Hello, it's Wednesday!");
  }
  public thursday(){
    console.log("Hello, it's Thursday!");
  }
  public friday(){
    console.log("Hello, it's Friday!");
  }
  public saturday(){
    console.log("Hello, it's Saturday!");
  }
  public sunday(){
    console.log("Hello, it's Sunday!");
  }
}
