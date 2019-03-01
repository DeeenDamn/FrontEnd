import { Component, OnInit } from '@angular/core';
// import { users1 } from '../Users1';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpService} from '../http/http.service';
import {User} from '../../User';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error = 0;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  Enter(email1, password1) {
    this.httpService.post('http://localhost:1111/users/login', {
      email: email1,
      password: password1,
      }).subscribe(data => {
        console.log(data);
        this.error = 0;
      }, error => {
      console.log(error);
      this.error = -1;
    }
    );
  }



}
