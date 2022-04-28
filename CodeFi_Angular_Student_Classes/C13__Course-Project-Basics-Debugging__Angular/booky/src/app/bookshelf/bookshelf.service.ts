import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Book } from "../shared/book/book.model";

@Injectable({
  providedIn: 'root'
})

export class BookshelfService {
  // Data sources should be IMMUTABLE!
private myBooks: Book[] = [
  new Book(
  "Harry Potter and the Philosopher's Stone",
  'J. K. Rowling',
  'Fantasy',
  'https://fivebooks.com/app/uploads/books/BC_1408855895.jpg'
  ),
  new Book(
  "Harry Potter and the Chamber of Secrets",
  'J. K. Rowling',
  'Fantasy',
  'https://fivebooks.com/app/uploads/books/BC_1408855909.jpg'
  ),
  new Book(
  "Harry Potter and the Prisoner of Azkaban",
  'J. K. Rowling',
  'Fantasy',
  'https://fivebooks.com/app/uploads/books/BC_1408855917.jpg'
  ),
  new Book(
  "Harry Potter and the Goblet of Fire",
  'J. K. Rowling',
  'Fantasy',
  'https://fivebooks.com/app/uploads/books/BC_1408855682.jpg'
  ),
  ];

  bookSelected = new Subject<Book>();
  bookListChanged = new Subject<Book[]>();

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
      this.bookListChanged.next(this.myBooks.slice())
    }

    //update
    updateBookshelfBook(index: number, book: Book){
      this.myBooks[index] = book;
      this.bookListChanged.next(this.myBooks.slice())
    }

    // delete
    removeBook(idx: number) {
      if (idx !== -1) {
        // We have a book at that index
        this.myBooks.splice(idx, 1);
        this.bookListChanged.next(this.myBooks.slice());
      }
    }
}
