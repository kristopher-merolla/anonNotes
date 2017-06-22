import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from "angular2-cookie/core";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Output() aTaskEventEmitter = new EventEmitter(); // emit from the form up to the parent

  constructor(private _httpService: HttpService, private _router: Router, private _cookieService:CookieService) { }

  activeUser = "";

  topic = {
    name: "",
    user_id: "",
    category: "",
    description: "",
    posts: 0
  }

  addTopic(){
    console.log("inside dash.comp.ts addTopic function");
  }

  errors = null;
  topics = null;

  ngOnInit() {
    this.getTopics();
    this.activeUser = this._cookieService.get('username');
  }

  // define a function to get all comments (to display on dashboard)
  getTopics(){
    this._httpService.getTopics()
    .then((data)=>{
      console.log("got topics from getTopics",data);
      if(data.message == "Success"){
          this.topics = data.topics;
      }
      else {
        this.errors = "There was a problem fetching the topics from the DB";
      }
    })
    .catch((err)=>{
      console.log("error doing getTopics:",err)
    })
  }

}
