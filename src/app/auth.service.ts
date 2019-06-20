import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { User } from  './user'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private token;

  constructor(private http: HttpClient) { }

  loginUser(UserInfo: User): Observable<Object | void> {
    const BASE_URL = "https://randi-api-test.herokuapp.com/api/v1/";
    let url = BASE_URL + 'login/'
    let params = {
      email: UserInfo.username,
      password: UserInfo.password
    }
    return this.http.post(url, params)
  }

  public isLoggedIn(){
    return localStorage.getItem('token') !== null;

  }

}
