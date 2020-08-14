import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';

declare function isMobileDevice(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  models = ['Resistance', 'Series A', 'Series B', 'Series C'];
  colors = ['#3ebd40', '#3e84bd', '#b32020', '#111111'];
  sizes = ['XS', 'S', 'M', 'L', 'XL'];
  descriptions = [
  `Resistance es una chaqueta diseñada justo para combatir contra las
  arduas jornadas de exposición al virus. Tiene un super tapabocas bien chido que proteje hasta
  los ojos, evitando el contagio al maximo, aparte un material antifluidos, evitará que cualquier sustancia,
  estornudo o liquido se quede pegado a tus prendas.
  Ideal para usar encima de tu ropa puesto que es muy ligera `,

  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, temporibus delectus,
  nulla maiores dolorum quasi perferendis debitis dolor neque, modi distinctio quis magni fugit
  corporis sequi? Nobis dolore labore nesciunt tempora maiores sed aliquid ex deserunt aliquam`,

  `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia necessitatibus accusamus
  nemo ratione libero cumque eius temporibus non neque doloribus.`,

  `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia necessitatibus accusamus
  nemo ratione libero cumque eius temporibus non neque doloribus.`];

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  isMobile: boolean;
  
  ngOnInit() {
    this.isMobile = isMobileDevice();
    
    this.galleryOptions = [
      {
        width: '600px',
        height: '500px',
        thumbnailsColumns: 4,
        imageArrowsAutoHide: true,
        imageAutoPlay: true,
        imageAutoPlayPauseOnHover: true
      },
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      {
        breakpoint: 400,
        preview: false
      }
    ];
    this.galleryImages = [
      {
        small: 'assets/img/cabin.png',
        medium: 'assets/img/cabin.png',
        big: 'assets/img/cabin.png'
      },
      {
        small: 'assets/img/circus.png',
        medium: 'assets/img/circus.png',
        big: 'assets/img/circus.png'
      },
      {
        small: 'assets/img/submarine.png',
        medium: 'assets/img/submarine.png',
        big: 'assets/img/submarine.png'
      }
    ];
  }
}

