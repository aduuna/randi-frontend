import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ProjectService{

  public data;

  constructor(private http: HttpClient) { }

  getProjects(): Promise<void | object>{
    const BASE_URL = "https://randi-api-test.herokuapp.com/api/v1/";
    let url = BASE_URL + 'projects/';
    let token = localStorage.getItem('token')
    return this.http.get(url, {headers: {'Authorization': "Bearer " + token } })
    .toPromise()
    .catch(err=>console.log('My Error', err))
  }

}
