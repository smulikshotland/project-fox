import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';


@Component({
  selector: 'app-all-apliction',
  templateUrl: './all-apliction.component.html',
  styleUrls: ['./all-apliction.component.css']
})
export class AllAplictionComponent implements OnInit {
  
  constructor(private listService: ListService ) {
    
   }

  ngOnInit(): void {

    
  }

}
