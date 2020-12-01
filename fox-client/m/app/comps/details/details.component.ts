import { Component, OnInit, Input } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product:any
addToCart(product) {
  this.cartService.addToCart(product);
  window.alert('המוצר נוסף לעגלה');
}

  constructor(private route: ActivatedRoute,
    private listService: ListService,
    private _router: Router,
    private cartService: CartService
    
  ) { }

 

  ngOnInit(): void {
   
    this.getHero();
  }

  getHero(): void {
    const Id =this.route.snapshot.queryParams.id;
    this.listService.getList().subscribe(data => {

      if(Array.isArray(data)){
        console.log("data",data)
      let result = data.filter(word => word.id == Id );
      this.product = result[0];
      }         
    });
  }

  goBack(): void {

    this._router.navigate(['/gallery']);

  }



}
