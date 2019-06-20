import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/observable'

@Injectable()
export class ProjectService{

  public data;

  constructor(private http: HttpClient) { }

  getProjects(): Observable<object>{
    const BASE_URL = "https://randi-api-test.herokuapp.com/api/v1/";
    let url = BASE_URL + 'projects/';
    let token = localStorage.getItem('token')
    return this.http.get(url, {headers: {'Authorization': "Bearer " + token } })
  }

}
