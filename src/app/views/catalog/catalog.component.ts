import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery-9';
import { models } from 'src/assets/jackets';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

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
        breakpoint: 500,
        width: '400px',
        height: '400px',
        thumbnailsPercent: 40,
        thumbnailsColumns: 3
      },
      {
        breakpoint: 400,
        width: '300px',
        height: '300px',
        thumbnailsPercent: 35,
        thumbnailsColumns: 3
      },
      {
        breakpoint: 300,
        width: '100%',
        height: '200px',
        thumbnailsColumns: 2,
        thumbnailsPercent: 30,
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
