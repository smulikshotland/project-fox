import { Component, OnInit, Input } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';
import { PersonsListService } from 'src/app/services/persons-list.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productToSendToServer: ShopingCartProduct
  product: any
  arrSize:any
  arrWidth:any
  signInForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private listService: ListService,
    private _router: Router,
    private cartService: CartService

  ) {

    this.arrSize=this.listService.arrSize
    this.arrWidth=this.listService.arrWidth
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
    this.listService.getListHats().subscribe(data => {

      if (Array.isArray(data)) {
        let result = data.filter(word => word.id == Id);
        this.product = result[0];

      }
    });
  }

  goBack(): void {
    this._router.navigate(['/gallery']);
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
       
       
      // sizeOfTheHat: this.size.controlers.value

      sizeOfTheHat: this.signInForm.controls.sizeOfTheHat.value,
      widthOfTheHat: this.signInForm.controls.widthOfTheHat.value,
      usersId: user.id,
      productsId:  parseInt( product.id)
      

    }).subscribe(data => {
      console.log('data after send to server:', data);
      console.log(this.signInForm.controls.size);

    })




  }

}



export interface ShopingCartProduct {
  name: string;
  date: any;
  sizeOfTheHat: number;
  widthOfTheHat: number;
  userId: number;
  productsId: number;
  price: string;
  image: string;

}
