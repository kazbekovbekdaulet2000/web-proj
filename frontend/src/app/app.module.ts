import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesDetailComponent} from './movies-detail/movies-detail.component'
import { ActorsComponent } from './actors/actors.component';
import { FooterComponent } from './footer/footer.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AccountComponent } from './account/account.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthInterceptor } from './services/AuthInterceptop';
import { MovieaddComponent } from './movieadd/movieadd.component';
import { ActoraddComponent } from './actoradd/actoradd.component';
import { DirectoraddComponent } from './directoradd/directoradd.component';


const comp: Routes =[
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: "movies", component: MoviesComponent},
  {path: "movies/:id", component: MoviesDetailComponent},
  {path: "actors", component: ActorsComponent},
  {path: "login", component: LoginComponent},
  {path: "sign-up", component: RegistrationComponent},
  {path: "reset-password", component: ResetpasswordComponent},
  {path: "wishlist", component: WishlistComponent},
  {path: "account", component: AccountComponent},
  {path: "movie-creation-form", component: MovieaddComponent},
  {path: "*", component: AppComponent} 
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegistrationComponent,
    MoviesComponent,
    ActorsComponent,
    FooterComponent,
    WishlistComponent,
    AccountComponent,
    ResetpasswordComponent,
    MoviesDetailComponent,
    MovieaddComponent,
    ActoraddComponent,
    DirectoraddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(comp),
    JwtModule.forRoot({
      config:{
        tokenGetter:() => {
          return localStorage.getItem('token');
        },
        allowedDomains: ['localhost:4200'],
        disallowedRoutes:[]
      }
    }),
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
