import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
          .maxClicks {
            /* backgroung-color: blue; // this doesn't work */
            color: white;
          }
          `]
})
export class AppComponent {
  isShown = true;
  showSpacer = false;
  clickList: ClickID = [];


  toggleElement(){
    this.isShown = !this.isShown;
    this.showSpacer = !this.showSpacer;
    let newClickID = {
      id : this.clickList.length + 1,
      time : new Date()};
    this.clickList.push(newClickID);

  }


}
   type ClickID = Array<{id: number, time: Date}>;
