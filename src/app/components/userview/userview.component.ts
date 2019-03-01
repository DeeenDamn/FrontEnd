import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http/http.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {
  data: Array<any>;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getAll().subscribe(
      data => {
        console.log(data);
        this.data = data;
      });
  }

}
