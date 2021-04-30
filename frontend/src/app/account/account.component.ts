import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile, UserProfileAdditional } from '../models';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor( private auth: AuthService,
              private route: Router) { }
  userInfo: UserProfile;
  userInfoAdditional: UserProfileAdditional;
  ngOnInit(): void {
    this.getUserInfo()
  }
  getUserInfo(){
    this.auth.profileinfo().subscribe((data)=>{
      this.userInfo = data;
      console.log(this.userInfo);
    })
    this.auth.profileadditional().subscribe((data)=>{
      this.userInfoAdditional = data;
      this.userInfoAdditional.image = "http://127.0.0.1:8000" + this.userInfoAdditional.image;
    })
  }

  isLoged(){
    return localStorage.getItem('token') !=null ;
  }

  logout(){
    this.auth.logout();
    this.route.navigate(['home']);
  }

}
