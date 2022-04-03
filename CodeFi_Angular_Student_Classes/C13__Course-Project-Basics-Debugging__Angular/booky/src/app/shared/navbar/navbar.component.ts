import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isShowingDropdown = false;
  @Output() selectedPage= new EventEmitter<string>();
  show = false;
  collapes = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectPage(pageName: string) {
    this.selectedPage.emit(pageName);
  }
}
