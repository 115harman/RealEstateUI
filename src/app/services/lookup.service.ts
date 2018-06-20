import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { ValidBeds } from '../models/valid_beds';
import { ValidBaths } from 'src/app/models/valid_baths';
import { ValidPriceDictionaries } from 'src/app/models/valid_price_dictionaries';

@Injectable()
export class LookupService {
  private _url = 'http://127.0.0.1:3000/lookup/';
  private _beds = new BehaviorSubject<ValidBeds[]>([]);
  private _baths = new BehaviorSubject<ValidBaths[]>([]);
  private _priceDictionaries = new BehaviorSubject<ValidPriceDictionaries[]>([]);

  constructor(private _http: HttpClient) {
    this.loadAll();
  }

  private handleError(error: any)//: Observable<any> {
  {
    console.error('An error occurred', error);
    //return Observable.throw(error.message || error);
  }

  validBeds(): Observable<ValidBeds[]> {
    return this._beds.asObservable();
  }

  validBaths(): Observable<ValidBaths[]> {
    return this._baths.asObservable();
  }

  validPriceDictionaries(): Observable<ValidPriceDictionaries[]> {
    return this._priceDictionaries.asObservable();
  }

  loadAll() {
    this._http
      .get<ValidBeds[]>(this._url + 'beds')
      .subscribe(data => {
        this._beds.next(data);
      }, this.handleError);

    this._http
      .get<ValidBaths[]>(this._url + 'baths')
      .subscribe(data => {
        this._baths.next(data);
      }, this.handleError);

    this._http
      .get<ValidPriceDictionaries[]>(this._url + 'priceDictionaries')
      .subscribe(data => {
        this._priceDictionaries.next(data);
      }, this.handleError);
  }
}