import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ServiceService implements HttpInterceptor{
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Token ${user.accessToken}`
        }
      });
    }
    return next.handle(request);
  }

  
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
