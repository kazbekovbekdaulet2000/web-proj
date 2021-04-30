import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { AuthService} from './auth.service'
import { Actor, Movie } from '../models';
import { AotCompiler } from '@angular/compiler';
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


  getMovies(searchText: string): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.apiURL + "movies/" );
  }

  getMovie(id):Observable<Movie>{
    console.log(id);
    return this.http.get<Movie>(this.apiURL + "movies/" + id);
  }
  
  getActors():Observable<Actor[]>{
    return this.http.get<Actor[]>(this.apiURL + "actors/");
  }

  getDirectors(): Observable<Actor>{
    return this.http.get<Actor>(this.apiURL + "directors/");
  }
}

