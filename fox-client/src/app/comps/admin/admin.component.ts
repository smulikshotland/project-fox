import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductManagerService } from 'src/app/services/product-manager.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  items
  signInForm: FormGroup;
  constructor(public ProductManagerService: ProductManagerService) { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      name: new FormControl(null, [Validators.minLength(2) ,Validators.required,Validators.maxLength(20)]),
      price: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.email,Validators.required]),
    })
  }

  onSubmit() {
    console.log("press");
    
      this.addProductByAdmin()
  }

  addProductByAdmin() {
    this.signInForm.controls.name.value,
          this.ProductManagerService.createProductToDB({
        
        name: this.signInForm.controls.name.value,
        price: this.signInForm.controls.price.value,
        image: this.signInForm.controls.image.value,
        category: this.signInForm.controls.category.value,
      }).subscribe(data => {
        console.log('data:', data);
      })
  }
  editProductByAdmin() {
    this.signInForm.controls.name.value,
          this.ProductManagerService.editProductToDB({
        
        name: this.signInForm.controls.name.value,
        price: this.signInForm.controls.price.value,
        image: this.signInForm.controls.image.value,
        category: this.signInForm.controls.category.value,
      }).subscribe(data => {
        console.log('data:', data);
      })
  }
  
  

}

