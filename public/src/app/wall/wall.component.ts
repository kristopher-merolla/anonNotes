import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  @Input() notes;
  @Output() aTaskEventEmitter = new EventEmitter();
  errormessage: string;

  constructor(){ 
    this.aTaskEventEmitter.emit();
  }

  ngOnInit() {
    this.aTaskEventEmitter.emit();
  }

}
