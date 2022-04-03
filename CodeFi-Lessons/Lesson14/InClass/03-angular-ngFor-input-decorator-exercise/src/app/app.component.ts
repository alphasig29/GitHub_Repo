import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '03-angular-ngFor-input-decorator-exercise';
  users :{userName: string, id: number}[] = [
    {userName: "Roger Smith", id: 9001},
    {userName: "William van Wilder", id: 2},
    {userName: "Korey Andrus", id: 7},
    {userName: "Vegita", id: 6500},
  ];
}
