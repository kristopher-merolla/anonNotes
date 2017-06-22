import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from "angular2-cookie/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output()
  aTaskEventEmitter = new EventEmitter(); // emit from the form up to the parent

  constructor(private _httpService: HttpService, private _router: Router, private _cookieService:CookieService) { }

  user = {
    name: "",
    topics: 0,
    posts: 0,
    comments: 0
  }

  login(form) {
    console.log("login function hit");

    // function to check user exists
    this._httpService.checkUser(this.user)
      .then( user => {
        if(user) {
          // have user, update cookie
          console.log("user found in DB", user);
          this._cookieService.put('username', user.name);
          form.resetForm();
          this._router.navigateByUrl("/dashboard");
        }
        else {
          // dont have user, need to create, update cookie
          this._httpService.createUser(this.user)
            .then( user => {
              console.log("createnew User", user);
              this._cookieService.put('username', user.name);
              form.resetForm();
              this._router.navigateByUrl("/dashboard");
            })
            .catch()
        }
      })
      .catch()

    // // if exists, save as cookie
    // this._cookieService.put('username', this.user.name); // put the cookie down

    // this.aTaskEventEmitter.emit(this.user); // emit from the form up to the parent
    // form.resetForm(); // reset the form so you don't get error messages sticking around!! :)
    // // this._httpService.redirectTo('/dashboard');
    // console.log("our cookie is:",this._cookieService.get('username'));
    
  }

  ngOnInit() {
    // this._cookieService.put('username','Kris');
    // console.log(this._cookieService.get('username'));
  }

}
