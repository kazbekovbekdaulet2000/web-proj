import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;
  constructor(public router: Router,
              public auth: AuthService) { } 
  ngOnInit(): void {
    if (this.isLoged()){
      this.auth.profileinfo().subscribe((data)=>{
        this.username = data['email'];
      })
    }
  }

  isLoged(){
    return localStorage.getItem('token') != null; 
  }

}
