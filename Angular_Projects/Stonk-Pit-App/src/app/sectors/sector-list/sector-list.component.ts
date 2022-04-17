import { Component, OnInit } from '@angular/core';
import { StockQuote } from 'src/app/shared/models/stock-quote.model';
import { SectorDataService } from '../sector-data.service';

@Component({
  selector: 'app-sector-list',
  templateUrl: './sector-list.component.html',
  styleUrls: ['./sector-list.component.css']
})
export class SectorListComponent implements OnInit {
  allSectors: StockQuote[];

  constructor(private sectorQuotes: SectorDataService) { }

  ngOnInit(): void {
    this.allSectors = this.sectorQuotes.getSectorData();
  }

  onRefreshData(){
    this.sectorQuotes.refreshSectorData();
  }

}
