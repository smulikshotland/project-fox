import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.paymentForm = new FormGroup({

    })
  }

  onSubmit(){
    
  }

}
