import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'; // to use map

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

<<<<<<< HEAD
  // function for login
  login(userName) {
    console.log("hit http.service login function", userName);
  }

  // function (for dashboard component) to get all topics (to display on dashboard)
  getTopics() {
    return this._http.get('/dashboard').map((data)=>data.json()).toPromise()
=======
  getNotes(){
    return this._http.get("/notes").map(response=>response.json()).toPromise();
  }

  addNote(note){
    return this._http.post("/addnote", note).map(response=>response.json()).toPromise();
>>>>>>> 0e23ecbab378201c79073e1f1d6124e60aea4069
  }

  // function to check users
  checkUser(user) {
    return this._http.post('/userlogin', user).map((data)=>data.json()).toPromise()
  }

  // function to create user
  createUser(user) {
    return this._http.post('/usercreate', user).map((data)=>data.json()).toPromise()
  }


}
