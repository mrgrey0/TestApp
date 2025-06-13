import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  userName: any;
  name: any;
  email:any;
  passWord:any;

  users: any[] =[];

  signup() {
    const newUser = {
      userName : this.userName,
      name : this.name,
      email : this.email,
      passWord : this.passWord
    };

    this.users.push(newUser);

    
  }



}
