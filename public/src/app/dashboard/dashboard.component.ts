import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Output() aTaskEventEmitter = new EventEmitter(); // emit from the form up to the parent

  constructor(private _httpService: HttpService, private _router: Router, private _cookieService:CookieService) { }

  activeUser = ""; // null as defaul

  logoutUser() {
    this.activeUser = "";
    this._cookieService.removeAll();
    this._router.navigateByUrl("/login");
  }

  topic = {
    title: "",
    description: "",
    comments: 0,
    user_id: "",
    user: ""
  }

  errors = null;
  topics = null;

  addTopic(form){
    console.log("inside dash.comp.ts addTopic function", this.activeUser);
    this.topic.user = this.activeUser;
    // step 1 (get user_id of active user)
    this._httpService.getUserId(this.activeUser)
      .then((user)=>{
        // THEN - add user_id to this.topic.user_id
        console.log("look what we have:",user.user._id); // now user.user._id is the id of the active user
        this.topic.user_id = user.user._id; // set user_id for our topic
        // THEN - create the topic in the database
        this._httpService.newTopic(this.topic)
          .then((data)=>{
            console.log("working on the newTopic function in dashboard comp",data);
            form.resetForm(); // reset the form and "topic" object after the topic was created
            this.topic.title = "";
            this.topic.description = "";
            this.topic.comments = 0;
            this.topic.user_id = "";
            this.getTopics();
          })
          .catch()
      })
      .catch()
  }

  ngOnInit() {
    if(!this._cookieService.get('username')) { // catch a user trying to access dashboard without logging in!
      this._router.navigateByUrl("/login");
    }
    else {
      this.getTopics();
      this.activeUser = this._cookieService.get('username');
      console.log("cookie:",this._cookieService.get('username'));
    }
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
