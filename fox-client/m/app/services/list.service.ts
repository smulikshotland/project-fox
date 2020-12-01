import { Injectable, Pipe } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
  
  constructor( private _http:HttpClient) {
 
  }

   getList(){
    return this._http.get('../../../assets/server/galery.json');
   }
  
  httpGet(url:string):Observable<any> {
    return this._http.get(url)
    
  }

}
