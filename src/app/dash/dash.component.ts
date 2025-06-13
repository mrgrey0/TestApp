import { Component } from '@angular/core';
import { GreetingsService } from '../Services/greetings.service';

@Component({
  selector: 'app-dash',
  standalone: true,
  imports: [],
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.css'
})
export class DashComponent {
  constructor(private greetSer : GreetingsService){}

  mondayGreeter(){
    this.greetSer.monday();
  }
}
