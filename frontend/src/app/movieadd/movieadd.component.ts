import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actor, Movie } from '../models';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-movieadd',
  templateUrl: './movieadd.component.html',
  styleUrls: ['./movieadd.component.css']
})
export class MovieaddComponent implements OnInit {
  movie: Movie;
  actors: Actor[];
  isLiked: Boolean;s
  constructor(private service: ServiceService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMovie(2);
    this.getActors();
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
