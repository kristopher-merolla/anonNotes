import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'; // to use map

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  // get all the topics from the database, deliver a promise back
  getTopics(){
    return this._http.get("/topics").map(response=>response.json()).toPromise();
  }

  // check if an existig user is already created in the DB
  checkUser(user) {
    return this._http.post('/userlogin', user).map((data)=>data.json()).toPromise();
  }

  // create a new user (should run checkUser(user) first!!)
  createUser(user) {
    return this._http.post('/usercreate', user).map((data)=>data.json()).toPromise();
  }

  // get the user_id of the active user from the database
  getUserId(user) {
    // need to setup an object to pass the _http.post(__)
    var activeUser = {
      name: user
    }
    console.log("inside HTTP.service.ts getUserId function", activeUser);
    return this._http.post('/getUserId', activeUser).map((data)=>data.json()).toPromise();
  }

  newTopic(topic) {
    console.log("inside HTTP.service.ts newTOPIC",topic)
    return this._http.post('/newTopic', topic).map((data)=>data.json()).toPromise();
  }


}
