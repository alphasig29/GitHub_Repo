import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {
  @Input() selectedBook: {title: string, author: string};
  @Output() userSelectedABook = new EventEmitter<{title: string, author: string}>();
  constructor() { }

  ngOnInit(): void {
  }

  bookSelected(selectedBook){
    // console.log("BookShelf Component received " + selectedBook.title);
    this.userSelectedABook.emit(selectedBook)
  }
}
