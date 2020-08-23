import { Component, OnInit } from '@angular/core';
import { catalog } from 'src/assets/catalog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  catalog = catalog;

  ngOnInit(){
  }

}
