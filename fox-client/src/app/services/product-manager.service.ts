import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductManagerService {

  constructor(private _http:HttpClient) { }


  createProductToDB({name,price,image,category}){
    return this._http.post(`${environment.herokuUrl}/products/post`, {name,price,image,category});
  }

  editProductToDB({name,price,image,category}){
    return this._http.patch(`${environment.herokuUrl}/products/patch`, {name,price,image,category});
  }
  getProduct(id){
    return this._http.get(`${environment.herokuUrl}/products${id}`)
  }
}
