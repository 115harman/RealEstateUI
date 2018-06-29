import { Injectable } from '@angular/core';
import { Property } from 'src/app/models/property';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private _url = 'http://127.0.0.1:3000/property/';

  constructor(private _http: HttpClient) { }

  searchProperties(filter: any): Observable<Property[]> {
    return this._http
      .get<Property[]>(this._url + 'search');
  }
}
