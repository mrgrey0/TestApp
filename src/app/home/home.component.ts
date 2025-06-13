import { Component } from '@angular/core';
import { GreetingsService } from '../Services/greetings.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private greetService: GreetingsService) { }

  callModay(){
    this.greetService.monday();
  }

  
  name ="Sujal Pawar";
  



  hello(){
    console.log("Hello its working");
  }

  greetings(){
    console.log("Good Evening....");
  }
  callTuesday(){
    this.greetService.tuesday();
  }
  callWednesday(){
    this.greetService.wednesday();
  }
  callThursday(){
    this.greetService.thursday();
  }
  callFriday(){
    this.greetService.friday();
  }
  callSaturday(){
    this.greetService.saturday();
  }
  callSunday(){
    this.greetService.sunday();
  }
}
