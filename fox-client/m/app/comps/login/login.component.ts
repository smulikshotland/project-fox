import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonsListService } from 'src/app/services/persons-list.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 email = document.querySelector("inputEmail");
 password = document.querySelector("inputPassword");
signInForm: FormGroup ;
  sing(){
    return "<a [routerLink]='chat'></a>"
  }
  constructor(private personsList:PersonsListService, private _router: Router,) { 
  }
  persons :any
  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, [Validators.minLength(6),Validators.maxLength(12)])
    })
  }
  onSubmit(){
    console.log(this.signInForm.controls);
    
  }
  getPerson(){
    var email=this.signInForm.value.email
    var password=this.signInForm.value.password
    
    this.personsList.getList().subscribe((data:any) => {
      console.log("data",data)
  var y= data.some(x=>x.email==email && x.password==password)
console.log("y",y)
if(y){
  this._router.navigate(['cart'])

}
else{
  alert("אינך קיים במערכת")
}
      
          
    });
  
  }
}
