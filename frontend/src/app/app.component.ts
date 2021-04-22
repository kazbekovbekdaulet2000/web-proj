import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  title = 'Web site';
  public isLoged: Boolean;
  
  ngOnInit(): void {
    console.log(AppComponent.isLogged());
  }

  static isLogged(){
    if (localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }
}
