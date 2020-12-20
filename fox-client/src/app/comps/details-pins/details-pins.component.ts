import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ListService } from 'src/app/services/list.service';
import { ShopingCartProduct } from '../details/details.component';

@Component({
  selector: 'app-details-pins',
  templateUrl: './details-pins.component.html',
  styleUrls: ['./details-pins.component.css']
})
export class DetailsPinsComponent implements OnInit {

  productToSendToServer: ShopingCartProduct
  product: any
  
  signInForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private listService: ListService,
    private _router: Router,
    private cartService: CartService

  ) {

    
  }



  ngOnInit(): void {
    this.signInForm = new FormGroup({
      sizeOfTheHat: new FormControl(),
      widthOfTheHat: new FormControl(),
    })
    this.getHero();
  }

  onSubmit() {
    this.addToCart(this.product)
  }


  getHero(): void {
    const Id = this.route.snapshot.queryParams.id;
    this.listService.getListPins().subscribe(data => {

      if (Array.isArray(data)) {
        let result = data.filter(word => word.id == Id);
        this.product = result[0];

      }
    });
  }

  goBack(): void {
    this._router.navigate(['/pins']);
  }

  addToCart(product) {
    const user =JSON.parse(localStorage.getItem('currentUser'))
    
    this.signInForm.controls.sizeOfTheHat.value,
    this.signInForm.controls.widthOfTheHat.value,
      this.cartService.productToSendToServer = this.productToSendToServer;
    window.alert('המוצר נוסף לעגלה');
    this.cartService.addProductShippingCart({
      name: product.name,
      date: Date.now(),
       email:user.email,
       price:product.price,
       image:product.image,
      sizeOfTheHat: 0,
      widthOfTheHat:0,
      usersId: user.id,
      productsId:  parseInt( product.id)
      

    }).subscribe(data => {
      console.log(data)
      

    })




  }


}
