import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpService} from './components/http/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'not YOUDO';

  constructor() {}

  ngOnInit(): void {}
}
