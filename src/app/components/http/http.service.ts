import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
// import {User} from '../User';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  data: any = {};
  httpHeader = {
    headers: new HttpHeaders( {'Content-type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  get(): any {
    this.http.get('http://localhost:1111/users/2').subscribe(
      data => {
        console.log(data);
        this.data = data;
      });
    return this.data;
  }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:1111/main');
  }

  post(url: string, body: any ): Observable<any> {
    return this.http.post(url, body, this.httpHeader);
  }
}
