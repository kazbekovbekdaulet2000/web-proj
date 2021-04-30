import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { User } from '../models';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private location: Location,
            private auth:AuthService,
            private router: Router) { }

  user: User;
  ngOnInit() {
    if (AppComponent.isLogged()){
      console.log('why');
      this.router.navigate['home'];
    }
    this.user = {
      email: '',
      name: '',
      surname: '',
      username: '',
      password: '',
      password2: '' 
    };
  }

  signup() {
    console.log(this.user);
    this.auth.register(this.user).subscribe(
      data=>{
        if (data.response == "successfully registered account"){
          alert(data.response);
          this.goLogin();
        }if (data.email == "account with this email already exists."){
          alert(data.email);          
        }else if (data.password == "Password must match"){
          alert(data.password);
        }
        console.log(data);
      },
      (error) => {
        alert(error.error);
      }
    )
  }

  goLogin(){
    this.goBack();
  }

  goBack() {
    this.location.back();
  }
}
