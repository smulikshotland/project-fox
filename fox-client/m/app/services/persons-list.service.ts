import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsListService {
  getPerson(id: number) {
        throw new Error('Method not implemented.');
      }
      arr3
  constructor(private _http:HttpClient) {

   }
   getList(){
        return this._http.get('../../../assets/server/persons.json');
       }
      
      httpGet(url:string):Observable<any> {
        return this._http.get(url)
        
      }
}



