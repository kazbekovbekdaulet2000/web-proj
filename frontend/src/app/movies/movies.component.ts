import { Component, OnInit } from '@angular/core';
import { AccountComponent } from '../account/account.component';
import { Movie, UserProfile, UserProfileAdditional } from '../models';
import { AuthService } from '../services/auth.service';
import { ServiceService } from '../services/service.service'
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[]; 
  searchText: string;

  userInfo: UserProfile;
  constructor(private service: ServiceService,
              private auth: AuthService) { }
  ngOnInit(): void {
    this.getMovies();
    this.getUserInfo();
    this.userInfo={
      id: 0,
      email: '',
      name: '',
      surname: '',
      username: '',
      is_superuser: false,    
      profile: 0
    }
  }

  getMovies(){
    this.service.getMovies(this.searchText).subscribe(
      movies =>{
        this.movies = movies
        console.log(movies['poster'])
      }
    )
  }

  getUserInfo(){
    this.auth.profileinfo().subscribe((data)=>{
      this.userInfo = data;
      console.log(this.userInfo.is_superuser)
    },
    (error)=>{
      console.log(error)
    })
  }

  isadmin(){
    return this.userInfo.is_superuser;
  }

  delete(id:number){
    console.log(id);
  }
}
