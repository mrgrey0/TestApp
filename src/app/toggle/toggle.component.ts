import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {

  // toggle(){
    
  //   this.isClick =! this.isClick;

  //   if(this.isClick){
  //     this.url="https://www.youtube.com/embed/2VuFt7XS1IU?si=VgmyDEg2xHxGDS_P";
  //     console.log("True");
  //   }else{
  //     this.url= "https://www.youtube.com/embed/y2F0wjoKEhg?si=MBCEAlLsyDRs92np"
  //     console.log("False");
  //   }

  //   this.vidURL=this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

  // }

    
  //   this.isClick =! this.isClick;

  //   if(this.isClick){
  //     this.url="https://www.youtube.com/embed/2VuFt7XS1IU?si=VgmyDEg2xHxGDS_P";
  //     console.log("True");
  //   }else{
  //     this.url= "https://www.youtube.com/embed/y2F0wjoKEhg?si=MBCEAlLsyDRs92np"
  //     console.log("False");
  //   }

  //   this.vidURL=this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

  // }

  isVal = true;

  toggle(){
    this.isVal =!this.isVal;
  }
}
