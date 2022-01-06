import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  viewType = 0;
  constructor() {}

  ngOnInit() {
  }

  changeView(i:any) {
    this.viewType = i;
  }

}