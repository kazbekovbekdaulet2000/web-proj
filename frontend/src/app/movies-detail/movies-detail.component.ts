import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, Actor } from '../models';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {

  movie: Movie;
  actors: Actor[];
  isLiked: Boolean;
  constructor(private service: ServiceService,
              private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((movie)=>{
    const id = +movie.get('id');
    this.getMovie(id);
    this.getActors();
  })
    this.isLiked = false;
  }

  getMovie(id: number){
    this.service.getMovie(id).subscribe(
      movie =>{
        this.movie = movie
        console.log(movie)
      }
    )
  }

  getActors(){
    this.service.getActors().subscribe(
      actors=>{
        this.actors = actors
      }
    )
  }

  isnull(data){
    // console.log(this.movie);
    return data != null;
  }

  like(){
    if(this.isLiked){
      this.isLiked = false;
    }else{
      this.isLiked = true;
    }
  }


}
