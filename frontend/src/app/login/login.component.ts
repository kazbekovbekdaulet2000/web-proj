import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private location: Location,
              private auth:AuthService,
              private route: Router) { }

  public user: any;
  ngOnInit() {
    this.user = {
      username: '',
      password: '',
    };
  }
 
  login() {
    this.auth.login(this.user).subscribe(
      data=>{
        localStorage.setItem('token', data.token);
        this.goBack();  
      },
      error=>{
        alert("Unable to log in with provided credentials");
      }
      )
  }

  goBack() {
    this.location.back();
  }

}
