import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  signInForm: FormGroup ;
  sing(){
    return "<a [routerLink]='chat'></a>"
  }
  constructor() { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, [Validators.minLength(6),Validators.maxLength(12)])
    })
  }
  onSubmit(){
    console.log(this.signInForm.controls);
    
  }

}
