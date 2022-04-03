import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '06-angular-output-input-exercise';
  searchText:string;
  allSearches: string[] = [];

  onSearchTextReceived(newSearchText: string){
    // lets add the passed search to an array so we
    // can show the search history
    this.allSearches.push(newSearchText);
  }
}
