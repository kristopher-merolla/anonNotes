import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  getNotes(){
    return this._http.get("http://localhost:8000/notes").map(response=>response.json()).toPromise();
  }

  addNote(note){
    return this._http.post("http://localhost:8000/addnote", note).map(response=>response.json()).toPromise();
  }
}
