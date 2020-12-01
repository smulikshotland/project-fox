import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BestServiceService {
arr2
  constructor(private _http:HttpClient) { }
  getList(){
    return this._http.get('../../../assets/server/best.json');
   }
  
  httpGet(url:string):Observable<any> {
    return this._http.get(url)
    
  }

}
