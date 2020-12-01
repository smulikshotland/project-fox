import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-pins',
  templateUrl: './pins.component.html',
  styleUrls: ['./pins.component.css']
})
export class PinsComponent implements OnInit {

  pinss:any
  constructor(private listService: ListService) {
    this.getGallery()

   }
  

  ngOnInit(): void {
   
  }
getGallery(){
  this.listService.getListPins().subscribe(data => {
    this.pinss = data;
    
        
  });

}

}
