import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-box',
  templateUrl: './box.components.html',
  styleUrls: ['./box.components.css']
})

export class BoxComponent implements OnInit{
  // boxNumber = 2;
  isEmpty = false;


  ngOnInit() {
    this.isEmpty = Math.random() > 0.5;
  }

  getColor() {
    return this.isEmpty? 'red':'green';
  }

}
