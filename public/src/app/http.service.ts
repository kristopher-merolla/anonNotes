import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  getNotes(){
    return this._http.get("/notes").map(response=>response.json()).toPromise();
  }

  addNote(note){
    return this._http.post("/addnote", note).map(response=>response.json()).toPromise();
  }
}
