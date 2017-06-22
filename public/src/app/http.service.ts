import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'; // to use map

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  getNotes(){
    return this._http.get("/notes").map(response=>response.json()).toPromise();
  }

  addNote(note){
    return this._http.post("/addnote", note).map(response=>response.json()).toPromise();
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
