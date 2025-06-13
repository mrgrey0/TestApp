import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
  name = "Sujal";

  isClick = true;

  toggle(){
    this.isClick = !this.isClick;
    this.isClick ? this.name = "Sujal" : this.name = "Pawar";
  }

  // toggle(){
  //   this.isClick = !this.isClick;
  //   if(this.isClick){
  //     this.name = "Sujal";
  //   }else{
  //     this.name="Pawar";
  //   }
  //}
}
