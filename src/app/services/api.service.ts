import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url : string = "https://restcountries.com/v2/alpha?codes=arg,af,ge,aus";

  constructor(private http : HttpClient) { }

  ObtenerPaises(){
    
    return this.http.get(this.url);
  }
}
