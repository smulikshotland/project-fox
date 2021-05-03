import { Injectable, Pipe } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../src/environments/environment'

export interface products {
  "id": string | number,
  "name": string,
  "size": [],
  "price": number,
  "image": string
}

// @Pipe({
//   name: 'ListService'
// })
@Injectable({
  providedIn: 'root'
})
export class ListService {
  getHat(id: number) {
    throw new Error('Method not implemented.');
  }
  arr1

  constructor(private _http: HttpClient) {

  }

  getListHats() {
    return this._http.get(`${environment.herokuUrl}/products/hats`);
  }
  getListPins() {
    return this._http.get(`${environment.herokuUrl}/products/pins`);
  }
  getListMovie() {
    return this._http.get(`${environment.herokuUrl}/products/movie`);
  }

  httpGet(url: string): Observable<any> {
    return this._http.get(url)

  }

  arrSize=[
    {size:0},
    {size:50},
    {size:51},
    {size:52},
    {size:53},
    {size:54},
    {size:55},
    {size:56},
    {size:57},
    {size:58},
    {size:59},
    {size:60},
]
arrWidth=[
  {width:0},
  {width:7.5},
  {width:8},
  {width:8.5},
  {width:9},
  {width:9.5},
  {width:10},
]
}
