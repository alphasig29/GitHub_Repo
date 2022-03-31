import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('gameDataReceived') gameDataGenerated = new EventEmitter<number>();
  gameIncrement: number = 0;
  myInterval;


  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    if (this.myInterval == undefined) {
      console.log('Starting the game!');
      this.gameIncrement = 0;
      this.myInterval = setInterval(() => {
        this.gameDataGenerated.emit(this.gameIncrement);
        // console.log('Increment: ' + this.gameIncrement);
        this.gameIncrement++;
      },1000);
    }
  }

  generateGameData(){
    console.log('Increment: ' + this.gameIncrement);
    this.gameIncrement++;
  }

  onStopGame(){
    if (this.myInterval != undefined){
      console.log('Stopping the game!');
      clearInterval(this.myInterval);
      this.myInterval = undefined;
    }
  }
}
