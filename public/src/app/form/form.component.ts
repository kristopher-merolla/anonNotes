import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  note: string;
  noteObject: Object;
  @Output() aTaskEventEmitter = new EventEmitter();

  constructor(private _httpService: HttpService, private _router: Router) {
  }

  ngOnInit() {
  }

  addNote(note) {
    this.noteObject = { name: note }
    this.aTaskEventEmitter.emit(this.noteObject);
  }

}
