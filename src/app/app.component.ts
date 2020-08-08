import { Component, OnInit } from '@angular/core';
declare function isMobileDevice(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  jacketImg = 'assets/img/pink_low.jpg';
  allJackets = 'assets/img/all_low.jpg';

  isMobile: boolean;

  ngOnInit(){
    this.isMobile = isMobileDevice();
  }

}

