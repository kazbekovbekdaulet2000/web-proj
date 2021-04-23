import { Component, OnInit } from '@angular/core';
import { Actor } from '../models';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  constructor( private service: ServiceService) { }
  actors: Actor[];
  ngOnInit(): void {
    this.getActors();
  }
  getActors(){
    this.service.getActors().subscribe( actors => {
      this.actors = actors
    })
  }

}
