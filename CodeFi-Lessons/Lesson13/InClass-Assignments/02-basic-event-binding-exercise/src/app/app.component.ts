import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-event-binding-exercise';

  logToConsole() {
    console.log("Successfully logged to the Console!");
  }
}
