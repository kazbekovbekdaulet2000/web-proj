import { templateJitUrl } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, Actor, UserProfileAdditional } from '../models';
import { AuthService } from '../services/auth.service';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {

  movie: Movie;
  profile: UserProfileAdditional;
  wishlist: Array<number>;
  actors: Actor[];
  isLiked: Boolean;
  constructor(private service: ServiceService,
              private auth: AuthService,
              private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((movie)=>{
      const id = +movie.get('id');
      this.getMovie(id);
      this.getActors();
      this.getUserProfile();
    });
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

  getUserProfile(){
    this.auth.profileadditional().subscribe(data=>{
      this.profile = data;
    })
  }
  isnull(data){
    // console.log(this.movie);
    return data != null;
  }

  like(){
    this.isLiked = true;
    console.log(this.profile.movies.push(this.movie.id));
    console.log(this.profile);
    this.auth.changewishes(this.profile);
    // if(this.isLiked){
    //   this.isLiked = false;
    // }else{
    //   this.isLiked = true;
    //   console.log(this.profile.movies.push(this.movie.id));
    //   console.log(this.profile);
    //   this.auth.changewishes(this.profile);
    // }
  }


}
