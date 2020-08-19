import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery-9';
import { models } from 'src/assets/models';

// declare function isMobileDevice(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  models = models;
  description: string;
  colors = ['#3ebd40', '#3e84bd', '#b32020', '#111111'];
  sizes = ['XS', 'S', 'M', 'L', 'XL'];
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  selected: number;
  // isMobile: boolean;

  ngOnInit() {
    // this.isMobile = isMobileDevice();
    this.galleryOptions = [
      {
        width: '600px',
        height: '500px',
        thumbnailsColumns: 4,
        imageArrowsAutoHide: true,
        imageAutoPlay: true,
        imageAutoPlayPauseOnHover: true,
        previewCloseOnClick: true,
        previewZoom: true
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
    this.galleryImages = this.models[0].images;
    this.description = this.models[0].description;
    this.selected = 0;
  }

  setModel(i){
    console.log(i);
    this.selected = i;
    this.galleryImages = this.models[i].images;
    this.description = this.models[i].description;
  }
  isActive(item) {
    return this.selected === item;
  }
}

