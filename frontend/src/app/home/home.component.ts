import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any  
  actors: any
  directors: any 
  constructor(private service: ServiceService) { }
  ngOnInit(): void {
    this.getMovies()
    this.getActors()
    this.getDirectors()
  }

  getMovies(){
    this.service.getMovies().subscribe(
      movies =>{
        this.movies = movies
        console.log(movies)
      }
    )
  }

  getActors(){
    this.service.getActors().subscribe(
      actors =>{
        this.actors = actors;
      }
    )
  }

  getDirectors(){
    this.service.getDirectors().subscribe(directors =>{
      this.directors = directors
     })
  }

}
