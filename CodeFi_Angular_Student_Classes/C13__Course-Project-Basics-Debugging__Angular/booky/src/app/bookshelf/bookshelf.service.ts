import { Injectable, EventEmitter } from "@angular/core";
import { Book } from "../shared/book/book.model";

@Injectable({
  providedIn: 'root'
})

export class BookshelfService {
  // Data sources should be IMMUTABLE!
private myBooks: Book[] = [
  new Book(
  'Book of Testing',
  'Will Wilder',
  'Mystery',
  'https://source.unsplash.com/50x50/?mystery,book'
  ),
  new Book(
  'Testing Title 2',
  'Nolan Hovis',
  'Science',
  'https://source.unsplash.com/50x50/?science,book'
  ),
  new Book(
  'Fantasy Test',
  'German Cruz',
  'Non-Fiction',
  'https://source.unsplash.com/50x50/?fantasy,book'
  ),
  new Book(
  'Fantasy Test',
  'Lex Pryor',
  'Math',
  'https://source.unsplash.com/50x50/?math,book'
  ),
  ];

  bookSelected = new EventEmitter<Book>();
  bookListChanged = new EventEmitter<Book[]>();

    // read all books
    getBooks() {
      return this.myBooks.slice();
    }

    // read 1 book
    getBookshelfBook(index: number){
      return this.myBooks.slice()[index];
    }

    // Create
    saveBook(book: Book) {
      this.myBooks.push(book);
      this.bookListChanged.emit(this.myBooks.slice())
    }


    // delete
    removeBook(idx: number) {
      if (idx !== -1) {
        // We have a book at that index
        this.myBooks.splice(idx, 1);
        this.bookListChanged.emit(this.myBooks.slice());
      }
    }
}
