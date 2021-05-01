import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Location } from '@angular/common';
import { MoviesComponent } from '../movies/movies.component';
import { Movie, UserProfileAdditional } from '../models';
import { ServiceService } from '../services/service.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  movies: Movie[] = [];
  profile: UserProfileAdditional;
  constructor(private location: Location,
              private http: ServiceService,
              private auth: AuthService) { }

  ngOnInit(): void {
    if(this.isLogged){
      this.auth.profileadditional().subscribe(data=>{
        this.profile = data;
        data.movies.forEach(elem =>{
          this.http.getMovies("").subscribe(movies=>{
            movies.forEach(item =>{
              if(item.id == elem){
                this.movies.push(item);
              }
            })
          })
        })
        console.log(this.movies);
      })
    }
  }

  isLogged(){
    return AppComponent.isLogged();
  }
  goBack(){
    this.location.back();
  }
}
