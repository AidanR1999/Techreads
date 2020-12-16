import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/_models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() book: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
