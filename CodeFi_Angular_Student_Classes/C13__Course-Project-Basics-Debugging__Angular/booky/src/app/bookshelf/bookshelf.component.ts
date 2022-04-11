import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from './bookshelf.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {
  selectedBook:Book;


  constructor(private bookshelfService: BookshelfService) { }

  ngOnInit(): void {
    // subscribe to the bookshelfService to gat all teh global updates
    this.bookshelfService.bookSelected.subscribe(
      (book: Book) => {
        this.selectedBook = book;
      });
  }

}
