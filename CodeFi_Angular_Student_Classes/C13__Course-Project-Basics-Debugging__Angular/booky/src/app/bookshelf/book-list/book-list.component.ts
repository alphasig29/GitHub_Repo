import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Output() emittedBook = new EventEmitter();
  myBookshelfBooks: Book[] = [
    new Book("Harry Potter 1", "J. K. Rowlling", "Fantasy", "https://source.unsplash.com/50x50/?mystery,book"),
    new Book("Harry Potter 2", "J. K. Rowlling", "Fantasy", "https://source.unsplash.com/50x50/?mystery,book"),
    new Book("Harry Potter 3", "J. K. Rowlling", "Fantasy", "https://source.unsplash.com/50x50/?mystery,book")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  handleSelectedBook(book:Book){
    this.emittedBook.emit(book);
  }
}
