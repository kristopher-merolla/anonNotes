import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  noteObject: Object;
  errormessage;
  notes: Array<object>;

  constructor(private _httpService: HttpService) {
    
  }
  
  getNotes() {
      this._httpService.getNotes()
        .then(
        data => {
          this.errormessage = null;
          this.notes = data;
        }
        )
        .catch(
        err => {
          this.errormessage = 'Bad note';
          console.log('error found', err);
        }
        )
    }

    addNote(note) {
      console.log('in parent addNote', note);
      this._httpService.addNote(note)
        .then(
        data => {
          this.getNotes();
        }
        )
        .catch(
        err => {
          console.log('err');
        }
        )
    }

  ngOnInit() {
  }
}
