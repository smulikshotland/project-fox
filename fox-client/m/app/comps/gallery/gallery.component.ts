import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
hats:any
  constructor(private listService: ListService) {
    this.getGallery()

   }
  

  ngOnInit(): void {
   
  }
getGallery(){
  this.listService.getList().subscribe(data => {
    this.hats = data;
        
  });

}

}


