import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';

  onUpdateUserName(event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onButtonClick() {
    this.userName = '';
  }
}
