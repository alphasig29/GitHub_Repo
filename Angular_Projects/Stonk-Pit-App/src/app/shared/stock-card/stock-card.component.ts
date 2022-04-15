import { Component, Input, OnInit } from '@angular/core';
import { StockQuote } from '../models/stock-quote.model';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {
  // stockQuote: StockQuote = new StockQuote('Cons Disc', 'XLY', 175.70, -0.45, -0.26, 175.96, 179.78, 179.48, 176.78);
  @Input() stockQuote: StockQuote;

  constructor() { }

  ngOnInit(): void {
  }

}
