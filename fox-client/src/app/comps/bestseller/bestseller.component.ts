import { Component, OnInit } from '@angular/core';
import { BestServiceService } from 'src/app/services/best-service.service';

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.css']
})
export class BestsellerComponent implements OnInit {
  bestList:any
  constructor(private bestService:BestServiceService) {
    this.getList()
   }

  ngOnInit(): void {
  }
  getList(){
    this.bestService.getList().subscribe(data => {
      this.bestList = data;
          
    });
  
  }
  
  

}
