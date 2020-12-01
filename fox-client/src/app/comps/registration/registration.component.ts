import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonsListService } from 'src/app/services/persons-list.service';

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
  constructor(private personsListService: PersonsListService) { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      name: new FormControl(null, [Validators.minLength(2) ,Validators.required,Validators.maxLength(20)]),
      lastName: new FormControl(null, [Validators.required]),
      addres: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email,Validators.required]),
      password: new FormControl(null, [Validators.required]),
    })
  }
  onSubmit(){
    if(this.signInForm.valid){
      this.addUserToDB()
    }
    
  }

  addUserToDB(){
    // console.log(44444444,       this.signInForm.controls.name.value,
      // );
    
    this.personsListService.createUserToDB({
      name: this.signInForm.controls.name.value,
      lastName: this.signInForm.controls.lastName.value,
      addres: this.signInForm.controls.addres.value,
      email: this.signInForm.controls.email.value,
      password: this.signInForm.controls.password.value,
    }
      
      ).subscribe( data => {
        localStorage.setItem('currentUser', JSON.stringify(data));
      console.log('data:', data);
      
    })
  }

}
