import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ShopingCartProduct } from '../comps/details/details.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemsSub$ = new Subject

  items = [];
  totalPriceToDisplay$: Subject<number> = new Subject;
  productToSendToServer: ShopingCartProduct
  constructor(private http: HttpClient) { }
  addToCart(product) {
    this.items.push(product);

    console.log(this.items);

  }
  // getPrice(){
  //   let sum ;
  //   this.items.forEach(i =>sum += i.price);
  //   return sum
  // }


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

  addProductShippingCart({ name, date, sizeOfTheHat, widthOfTheHat, usersId, productsId ,email,price,image}) {
    console.log('user id' , usersId);
    
    return this.http.post('http://localhost:3000/shopping-cart/post', { name, date, sizeOfTheHat, widthOfTheHat, usersId, productsId ,email,price,image});
  }

  getShoppingCard(id) {
    
    return this.http.get(`http://localhost:3000/shopping-cart/${id}`);
  }

  

  deliteShoppingCard(id){
    
    return this.http.delete(`http://localhost:3000/shopping-cart/${id}`).subscribe(data =>{
      console.log('bug after delited!!!', data);
      this.itemsSub$.next(data)
      
      return data;
      
    });
    ;

  }
}

