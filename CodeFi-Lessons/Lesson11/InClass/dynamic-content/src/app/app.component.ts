import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-content';
  name: string = 'William van Wilde';

  onChangeName(){
    this.name = (<HTMLInputElement>event.target).value;
  }

}
