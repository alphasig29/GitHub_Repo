import { Component, EventEmitter, OnInit, NgModule, Output } from '@angular/core';

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
    this.searchTextGenerated.emit(this.mySearch);
  }
  // onSearchEntry() {
  //   console.log(this.mySearch);
  //   // this.onSearch.emit(this.mySearch);
  // }
}
