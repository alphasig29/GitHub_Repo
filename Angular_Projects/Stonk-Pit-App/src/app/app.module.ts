import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SectorListComponent } from './sectors/sector-list/sector-list.component';
import { StockListComponent } from './stocks/stock-list/stock-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { StockCardComponent } from './shared/stock-card/stock-card.component';
import { HttpClientModule } from '@angular/common/http';
import { Constants } from './config/constants';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectorListComponent,
    StockListComponent,
    HomePageComponent,
    FooterComponent,
    StockCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
