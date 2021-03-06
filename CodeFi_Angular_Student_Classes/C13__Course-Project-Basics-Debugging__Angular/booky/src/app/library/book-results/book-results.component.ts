import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
import { LibraryService } from '../library.service';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css']
})
export class BookResultsComponent implements OnInit {
  allBooks: Book[] = [];


  constructor(private libraryService: LibraryService,
              private bookshelfService: BookshelfService) {}

  ngOnInit(): void {
    this.allBooks = this.libraryService.getBooks();
    this.libraryService.bookListChanged.subscribe((newBookArray: Book[]) => {
      this.allBooks = newBookArray;
    });
  }

  onSaveBook(book: Book) {
    // ad the book eo the BookshelfService allBookShelfBooks array
    this.bookshelfService.saveBook(book);
    // save the book to the global bookSelected Subject
    this.bookshelfService.bookSelected.next(book);
    }
}
