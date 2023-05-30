import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  data!: any[];
  constructor(private http:HttpClient) {
    this.data = [];
  }



  public getLivres(mot: string): Observable<any> {
    let header = { 'X-RapidAPI-Key': '4c2a7da60a009c45813bbec4eeeb6a59',
      'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'};
    return this.http.get<any>(`https://hapi-books.p.rapidapi.com/search/${mot}`,
      {headers : header});
  }

}
