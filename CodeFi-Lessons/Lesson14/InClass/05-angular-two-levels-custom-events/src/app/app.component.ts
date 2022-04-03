import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '05-angular-two-levels-custom-events';
  @Input() theSelectedBook: {title: string, author: string};;
}
