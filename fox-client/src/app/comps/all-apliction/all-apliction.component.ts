import { Component, OnInit } from '@angular/core';
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
    private personsListService:PersonsListService ) {
    
   }

  ngOnInit(): void {
    this.personsListService.userRole$.subscribe( (role:string) => {
      this.userRole = role
    })
    
    

    
  }
  
  

}
