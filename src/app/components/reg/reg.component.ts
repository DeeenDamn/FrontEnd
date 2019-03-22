import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../User';
import { HttpService } from '../http/http.service';
import {routerNgProbeToken} from "@angular/router/src/router_module";

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
  }

  registration(email1, password1): void {
    this.httpService.post('/users', {
      email: email1,
      password: password1,
      verify: false
    }).subscribe(data => {
      console.log(data);
    },
      );
  }
}
