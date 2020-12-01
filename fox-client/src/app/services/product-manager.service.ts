import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductManagerService {

  constructor(private _http:HttpClient) { }


  createProductToDB({name,price,image,category}){
    return this._http.post('http://localhost:3000/products/post', {name,price,image,category});
  }

  editProductToDB({name,price,image,category}){
    return this._http.patch('http://localhost:3000/products/patch', {name,price,image,category});
  }
  getProduct(id){
    return this._http.get(`http://localhost:3000/products${id}`)
  }
}
