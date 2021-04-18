import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service'
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any  
  constructor(private service: ServiceService) { }
  ngOnInit(): void {
    this.getMovies()
  }

  getMovies(){
    this.service.getMovies().subscribe(
      movies =>{
        this.movies = movies
        console.log(movies)
      }
    )
  }


}
