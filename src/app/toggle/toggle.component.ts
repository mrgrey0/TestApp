import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
  // name = "Sujal";
  // imagepath = "../../assets/cookie2.png";
  // isClick = true;
  // isClickBtn = true;

  // toggle(){
  //   this.isClick = !this.isClick;
  //   this.isClick ? this.name = "Sujal" : this.name = "Pawar";
  // }


  // toggle(){
  //   this.isClick = !this.isClick;
  //   if(this.isClick){
  //     this.name = "Sujal";
  //   }else{
  //     this.name="Pawar";
  //   }
  //}

  vidURL: SafeResourceUrl;
  isClick = true;

  constructor(private sanitizer : DomSanitizer){
    this.vidURL = this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.youtube.com/embed/2VuFt7XS1IU?si=VgmyDEg2xHxGDS_P"
    );
  }
  url='';
  toggle(){
    
    this.isClick =! this.isClick;

    if(this.isClick){
      this.url="https://www.youtube.com/embed/2VuFt7XS1IU?si=VgmyDEg2xHxGDS_P";
      console.log("True");
    }else{
      this.url= "https://www.youtube.com/embed/y2F0wjoKEhg?si=MBCEAlLsyDRs92np"
      console.log("False");
    }

    this.vidURL=this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

  }
}
