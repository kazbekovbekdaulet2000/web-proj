import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiURL = "http://127.0.0.1:8000/api/" 
  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get(this.apiURL + "movies/")
  }

  getActors(){
    return this.http.get(this.apiURL + "actors/")
  }

  getDirectors(){
    return this.http.get(this.apiURL + "directors/") 
  }
}
