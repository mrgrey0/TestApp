import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  isVal=true;
  cars:any[]=["Swift","Bolero","Mustang","Thar","Legender"];
  bikes:any[]=["Splendor","Bullet","GT","R1","R3"];

  toggle(){
    this.isVal =! this.isVal;
  }

}
