import { Component, OnInit } from '@angular/core';
import { UserCardsComponent } from '../user-cards/user-cards.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public card;
public x = "";
  constructor() { }

  ngOnInit() {
    
  }

}
