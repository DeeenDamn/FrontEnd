import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../User';
import { HttpService } from '../http/http.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
  }

  registration(email1, login1, password1): void {
    this.httpService.post('http://localhost:1111/users/registration', {
      login : login1,
      email: email1,
      password: password1,
      verify: false,
      roles: ['USER']
    }).subscribe(data => {
      console.log(data);
    },
      );
  }
}
