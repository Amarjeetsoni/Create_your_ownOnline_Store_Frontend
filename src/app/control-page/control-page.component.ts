import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-page',
  templateUrl: './control-page.component.html',
  styleUrls: ['./control-page.component.css']
})
export class ControlPageComponent implements OnInit {

  Home:boolean = false;
  Services:boolean = false;
  FAQ:boolean = false;
  Roles:boolean = false;
  Statistics:boolean = false;
  Aboutus:boolean = false;
  constructor() { 
    this.Home = true;
  }

  ngOnInit() {
  }
  public HomeFunction(){
     this.Home = true;
     this.Services = false;
     this.FAQ = false;
     this.Roles = false;
     this.Statistics = false;
     this.Aboutus = false;
  }
  public ServicesFunction(){
    this.Home = false;
    this.Services = true;
    this.FAQ = false;
    this.Roles = false;
    this.Statistics = false;
    this.Aboutus = false;
 }
 public FAQFunction(){
  this.Home = false;
  this.Services = false;
  this.FAQ = true;
  this.Roles = false;
  this.Statistics = false;
  this.Aboutus = false;
}
public RolesFunction(){
  this.Home = false;
  this.Services = false;
  this.FAQ = false;
  this.Roles = true;
  this.Statistics = false;
  this.Aboutus = false;
}
public StatisticsFunction(){
  this.Home = false;
  this.Services = false;
  this.FAQ = false;
  this.Roles = false;
  this.Statistics = true;
  this.Aboutus = false;
}
public AboutusFunction(){
  this.Home = false;
  this.Services = false;
  this.FAQ = false;
  this.Roles = false;
  this.Statistics = false;
  this.Aboutus = true;
}

}
