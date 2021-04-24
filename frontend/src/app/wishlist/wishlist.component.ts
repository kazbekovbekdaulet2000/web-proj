import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private location: Location,) { }

  ngOnInit(): void {
  }

  isLogged(){
    return AppComponent.isLogged();
  }
  goBack(){
    this.location.back();
  }
}
