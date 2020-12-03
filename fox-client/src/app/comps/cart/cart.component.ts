import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { products } from 'src/model/prouct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items
  sum = 0;
  b=0
  c=0

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {

    // this.items = this.cartService.getItems();
    this.getShoppingCard()
    

    this.cartService.itemsSub$.subscribe(data => {
      this.items = data
    })

   

  }

  getPrice() {
    this.items.forEach(i => this.sum += parseFloat( i.price));

    return this.sum
  }
  getPrice1(){
    this.c= this.sum-this.b
     return this.c
  }

  getTax(a){
 this.b=a*0.17
 
 return this.b
  }
  

  getShoppingCard() {
    const user = JSON.parse(localStorage.getItem('currentUser'))


    this.cartService.getShoppingCard(user.id).subscribe(data => {
      this.items = data
      this.getPrice()
      this.getTax(this.sum)
      this.getPrice1()
    })

  }
  deliteItem(id) {

    this.cartService.deliteShoppingCard(id)
  }

}
