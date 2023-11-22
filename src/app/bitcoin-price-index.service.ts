import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, retry, catchError, throwError } from 'rxjs';
import { BitcoinPrice } from './Bitcoin';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BitcoinPriceIndexService {
  private _url:string="/exchange/export"
  constructor(private _http: HttpClient) { }
  getBitcoinData()
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }

  return this._http.get<any>(this._url,requestOptions).pipe(
    map(res=>JSON.parse(res.slice(1,-1)) as BitcoinPrice),
    retry(3),
    catchError(this.handleError))
  }
  
  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }
  
}