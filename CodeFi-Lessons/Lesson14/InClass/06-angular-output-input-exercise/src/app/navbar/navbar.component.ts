import { Component, OnInit, NgModule, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mySearch: string;
  @Output() searchTextGenerated = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSerchTextChanged() {
    // only emit search  text is there is a value
    if (this.mySearch.trim() != ''){
      this.searchTextGenerated.emit(this.mySearch);
      this.mySearch = '';
    }
    // set focus back to the Input box
    document.getElementById('searchInput').focus();

  }
}
