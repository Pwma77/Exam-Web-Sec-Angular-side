import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serviceUrl='http://localhost:2000/api/';

  constructor( private http:HttpClient) { }

  public getApi(){
    return this.http.get(this.serviceUrl + 'getEndpoint/');
  }

  public postApi(data){
    return this.http.post(this.serviceUrl + 'postEndpoint/', data);
  }



}
