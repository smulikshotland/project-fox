import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie:any
  constructor(private listService: ListService) {
    this.getGallery()

   }
  

  ngOnInit(): void {
   
  }
getGallery(){
  this.listService.getListMovie().subscribe(data => {
    this.movie = data;
    
        
  });

}


}
