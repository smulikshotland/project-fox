import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from 'src/app/services/list.service';
import { PersonsListService } from 'src/app/services/persons-list.service';


@Component({
  selector: 'app-all-apliction',
  templateUrl: './all-apliction.component.html',
  styleUrls: ['./all-apliction.component.css']
})
export class AllAplictionComponent implements OnInit {
  userRole: string;
  
  
  constructor(
    private listService: ListService,
    private personsListService:PersonsListService,
    private _router: Router, ) {
    
   }

  ngOnInit(): void {
    this.personsListService.userRole$.subscribe( (role:string) => {
      this.userRole = role
    })
    
    

    
  }
  LookingAtTheBasket(){
    this._router.navigate(['cart'])
    return alert('אם ברצונך ליראות את הפריטים שהינך מוסיף לעגלה בבקשה הירשם בעמוד הבית')

  }
  
  

}
