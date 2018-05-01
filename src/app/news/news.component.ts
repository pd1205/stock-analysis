import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public x;
  public y;
  public output;
  constructor() { }

  public name = {

    firstName : "prasanth",
    lastName : "chaudhary"

  }

  ngOnInit() {

    //onClick(this.x,this.y){
     // this.output = this.x*this.y;
    //}
  }

}
