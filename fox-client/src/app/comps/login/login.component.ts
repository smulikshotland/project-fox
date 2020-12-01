import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonsListService } from 'src/app/services/persons-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email = document.querySelector("inputEmail");
  password = document.querySelector("inputPassword");
  signInForm: FormGroup;
  userRole: string
  sing() {
    return "<a [routerLink]='chat'></a>"
  }
  constructor(private personsListService: PersonsListService, private _router: Router,) {
  }
  persons: any
  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, [Validators.minLength(6), Validators.maxLength(12)])
    })
  }
  async onSubmit() {
    var y = this.personsListService.validateUser(this.signInForm.controls.email.value,
      await this.signInForm.controls.password.value).subscribe((data: any) => {
        localStorage.setItem('currentUser', JSON.stringify(data));

        console.log("data after login", data);
        this.personsListService.userId = data.id
        this.personsListService.userRole$.next(data.role)

        if (!data) {
          console.log("plplplpl");

          alert('אינך קיים במערכת')
          return false

        }
        this._router.navigate(['cart'])

        return alert('ברוך הבא')

      })
    // console.log(!y);

  }

}

