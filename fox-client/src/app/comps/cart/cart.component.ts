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
   sum=0 ;
   
  constructor(private cartService: CartService) {
    
  }
  
  ngOnInit(): void {
    
    // this.items = this.cartService.getItems();
    this.getShoppingCard()

    this.cartService.itemsSub$.subscribe( data => {
      this.items = data})
      this.getPrice()

  }
  
  getPrice(){
    this.items.forEach(i =>this.sum +=i.price);
    
    return this.sum
  }

  getShoppingCard(){
    const user =JSON.parse(localStorage.getItem('currentUser'))


this.cartService.getShoppingCard(user.id).subscribe(data=>{
  this.items = data  
})

  }
  deliteItem(id){

    this.cartService.deliteShoppingCard(id)
  }

}
