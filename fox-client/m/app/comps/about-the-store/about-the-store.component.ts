import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-about-the-store',
  templateUrl: './about-the-store.component.html',
  styleUrls: ['./about-the-store.component.css']
})

export class AboutTheStoreComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }

  constructor() { }
  menu=0

  ngOnInit(): void {
  }

}
