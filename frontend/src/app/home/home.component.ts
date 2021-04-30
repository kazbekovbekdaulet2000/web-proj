import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service'
import { AuthService } from '../services/auth.service'
import { Actor, Movie } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[]; 
  actors: Actor[];
  slideIndex = 1
  directors: any 
  constructor(private service: ServiceService,
            private auth: AuthService) { }
  ngOnInit(): void {
    this.getMovies();
    this.getActors();
    this.getDirectors();
  }

  getMovies(){
    this.service.getMovies("").subscribe(
      movies =>{
        this.movies = movies;
        console.log(movies);
        this.showSlides(1);
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

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    let i;
    var slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement> ;
    var dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) {this.slideIndex = 1}    
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";  
    dots[this.slideIndex-1].className += " active"; 
  } 

}
