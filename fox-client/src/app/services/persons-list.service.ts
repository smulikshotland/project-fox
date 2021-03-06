import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Person } from 'src/model/person';
import { environment } from '../../../src/environments/environment'

export interface persons{
  "id": string|number,
  "name": string,
  "email":string,
  "password":string,
  
}

@Injectable({
  providedIn: 'root'
})
export class PersonsListService {
  currentUser$: BehaviorSubject<Person> = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
  userRole$ = new Subject
  userId: number;
  getPerson(id: number) {
        throw new Error('Method not implemented.');
      }
      
  constructor(private _http:HttpClient) {

   }
  //  postPerson(){
  //    this._http.post('http://localhost:3000/')

  //  }

  
  
   createUserToDB({name,lastName,addres,email,password}){
        return this._http.post(`${environment.herokuUrl}/users/post`, {name,lastName,addres,email,password});
        
        
       }
      
      httpGet(url:string):Observable<any> {
        return this._http.get(url)
        
      }

     

      validateUser(email,password):Observable<any>{
        return this._http.post(`${environment.herokuUrl}/auth/login`, {email,password});
      }
}







