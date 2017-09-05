import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  welcomeTitle:string;
  welcomeMsg:string;
  
  ngOnInit() {
    this.welcomeTitle = 'Welcome Title:';
    this.welcomeMsg ='Welcome to My Home Page';
  }

}
