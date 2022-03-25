import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {
  canOpenMoreBoxes = false;
  boxText = "You haven't opened a box yet."
  boxName = "Default";
  haveOpenedABox = false;
  boxes = ['Big Box', 'Box 2'];

  constructor() { }

  ngOnInit(): void {
  setTimeout(()=>{
    this.canOpenMoreBoxes = true;
  }, 3000);

}

onOpenBox() {
  this.boxText = `You have opened ${this.boxName}.`;
  this.haveOpenedABox =  true;
  this.boxes.push(this.boxName);
}

}
