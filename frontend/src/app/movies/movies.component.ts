import { Component, OnInit } from '@angular/core';
import { AccountComponent } from '../account/account.component';
import { Movie } from '../models';
import { ServiceService } from '../services/service.service'
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[]; 
  searchText: string;
  constructor(private service: ServiceService,
              private admin: AccountComponent) { }
  ngOnInit(): void {
    this.getMovies()
  }

  getMovies(){
    this.service.getMovies(this.searchText).subscribe(
      movies =>{
        this.movies = movies
        console.log(movies)
      }
    )
  }

  isadmin(){
    return false;
    // return this.admin.userInfo.is_superuser;
  }

}
