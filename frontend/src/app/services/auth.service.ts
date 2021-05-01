import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, ObservedValueOf, of } from 'rxjs';
import { AuthToken, AuthData, User, UserProfile, UserProfileAdditional} from '../models'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  is_superuser = false;
  URL = 'http://127.0.0.1:8000'
  
  constructor(private http: HttpClient) {}
  
  login(user:AuthData): Observable<AuthToken>{
    return this.http.post<AuthToken>(`${this.URL}/api/account/token/`, {
        email: user.username,
        password: user.password
      }
    )
  }

  register(user: User){
    const body = {
      email: user.email,
      name: user.name,
      surname: user.surname,
      username: user.username,
      password: user.password,
      password2: user.password2
    }
    return this.http.post<any>(`${this.URL}/api/account/register/`, body)
  }

  profileinfo():Observable<UserProfile>{
    return this.http.get<UserProfile>(`${this.URL}/api/userpage/`)
  }

  profileadditional(): Observable<UserProfileAdditional>{
    return this.http.get<UserProfileAdditional>(`${this.URL}/api/userpage/about/`)
  }

  changewishes(body: UserProfileAdditional){
    console.log({
      id: 1,
      user: 1,
      movies: []
    })
    return this.http.post(`${this.URL}/api/userpage/about/`, body)
  }


  logout():void {
    localStorage.removeItem('token');
  }
  

}
