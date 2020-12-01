import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  
  sum:number;
  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
   }

  ngOnInit(): void {
    this.sum = this.cartService.getPrice() ;
  }

}
