import { Injectable } from "@angular/core";
import { StockQuote } from "../shared/models/stock-quote.model";


@Injectable({
  providedIn: 'root'
})

export class SectorDataService{

  private sectorData: StockQuote[] = [
    new StockQuote('Cons Disc', 'XLY', 175.70, -0.45, -0.26, 175.96, 179.78, 179.48, 176.78),
    new StockQuote('Cons Staples', 'XLP', 78.33, -0.07, -0.09, 78.25, 79.12, 78.72, 78.86),
    new StockQuote('Energy', 'XLE', 77.29, 0.15, 0.19, 76.96, 78.70, 79.53, 78.68),
    new StockQuote('Financials', 'XLF', 37.77, 0.05, 0.13, 37.66, 38.15, 37.89, 37.79),
    new StockQuote('Health Care', 'XLV', 139.64, -0.35, -0.25, 139.78, 143.00, 142.83, 142.42),
    new StockQuote('Industirals', 'XLI', 99.75, 1.47, 0.47, 99.10, 100.40, 99.60, 99.28),
    new StockQuote('Materials', 'XLB', 88.04, 0.00, 0.00, 87.93, 88.98, 88.48, 88.19),
    new StockQuote('Real Estate', 'XLRE', 48.97, -0.02, -0.04, 48.85, 49.79, 49.67, 19.56),
    new StockQuote('Techonogy', 'XLK', 148.40, -0.17, -0.11, 148.37, 150.69, 152.41, 150.50),
    new StockQuote('Comm Services', 'XLC', 67.00, -0.20, -0.30, 67.11, 68.26, 68.08, 67.63),
    new StockQuote('Utilities', 'XLU', 76.00, 0.09, 0.12, 75.79, 77.11, 76.96, 77.01)
  ];

  private sp500Data: StockQuote = 
    new StockQuote('S&P 500', 'SPY', 439.67, -0.25, -0.06, 439.39, 445.00, 447.57, 44.11);

  getSectorData() {
    return this.sectorData.slice();
  }

  

}