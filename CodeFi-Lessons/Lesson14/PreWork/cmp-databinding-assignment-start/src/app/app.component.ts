import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumberArray:number[] = [];
  evenNumberArray:number[] = [];
    title = 'cmp-databinding-assignment-start';

    onRecieveGameData(gameData:number){
      if (gameData % 2 === 0 ) {
        this.evenNumberArray.push(gameData);
        console.log('added even number: ' + gameData);
      } else {
        this.oddNumberArray.push(gameData);
        console.log('added odd number: ' + gameData);
      }
    }
}
