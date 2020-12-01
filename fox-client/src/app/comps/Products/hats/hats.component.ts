import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-hats',
  templateUrl: './hats.component.html',
  styleUrls: ['./hats.component.css']
})
export class HatsComponent implements OnInit {

  hats:any
  constructor(private listService: ListService) {
    this.getGallery()

   }
  

  ngOnInit(): void {
   
  }
getGallery(){
  this.listService.getListHats().subscribe(data => {
    this.hats = data;
    
        
  });

}


}
