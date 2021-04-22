import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { AuthService} from './auth.service'
import { Movie } from '../models';
@Injectable({
  providedIn: 'root'
})

export class ServiceService{
  
  constructor(private http: HttpClient,
              public auth: AuthService) { 
  let httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
              }
  
  private apiURL = "http://127.0.0.1:8000/api/" 


  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.apiURL + "movies/");
  }

  getMovie(movies_id):Observable<Movie>{
    console.log(movies_id);
    return this.http.get<Movie>(this.apiURL + "movies/" + movies_id);
  }
  
  getActors(){
    return this.http.get(this.apiURL + "actors/");
  }

  getDirectors(){
    return this.http.get(this.apiURL + "directors/");
  }
}

