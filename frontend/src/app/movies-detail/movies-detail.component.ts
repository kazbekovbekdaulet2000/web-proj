import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {

  movie: Movie;
  constructor(private service: ServiceService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((movie)=>{
    const id = +movie.get('id');
    console.log(id);
    this.getMovie(id);
  })
  }

  getMovie(id: number){
    this.service.getMovie(id).subscribe(
      movie =>{
        this.movie = movie
      }
    )
  }


}
