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
  image: string;
  constructor(public router: Router,
              public auth: AuthService) { } 
  ngOnInit(): void {
    if (this.isLoged()){
      this.auth.profileinfo().subscribe((data)=>{
        this.username = data['email'];
      })
      this.auth.profileadditional().subscribe((data)=>{
        this.image = "http://127.0.0.1:8000" + data['image'];
      })
    }else{
      this.username= '';
      this.image ='';
    }
  }

  isLoged(){
    return localStorage.getItem('token') != null; 
  }

}
