import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  sum:number ;
  constructor(private http: HttpClient) { }
  addToCart(product) {
    this.items.push(product);
    console.log(this.items);
    
  }
  getPrice(){
    let sum ;
    this.items.forEach(i =>sum += i.price);
    return sum
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get('../../../assets/server/shipping.json');
  }
}
