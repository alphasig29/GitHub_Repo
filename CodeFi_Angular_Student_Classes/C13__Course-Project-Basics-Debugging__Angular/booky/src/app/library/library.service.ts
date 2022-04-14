import { Injectable, EventEmitter } from "@angular/core";
import { Book } from "../shared/book/book.model";

@Injectable({
  providedIn: 'root'
})

export class LibraryService {
  bookListChanged = new EventEmitter<Book[]>();
  private allBooks: Book[] = [
    new Book(
    "The Expanse: Leviathan Wakes",
    "James S. A. Corey",
    "Sci-Fi",
    "https://images.secondsale.com/images/dbe5236a0854feb97c6847279e1f3abb.jpg"
    ),
    new Book(
    "The Expanse: Caliban's War",
    "James S. A. Corey",
    "Sci-Fi",
    "https://images.secondsale.com/images/1b2e7c3e8a41699b28f40ee16ea2b697.jpg"
    ),
    new Book(
    "The Expanse: Abaddon's Gate",
    "James S. A. Corey",
    "Sci-Fi",
    "https://images.secondsale.com/images/1835dc1221bf0b300e6036727ab612ff.jpg"
    ),
    new Book(
    "The Expanse: Cibola Burn",
    "James S. A. Corey",
    "Sci-Fi",
    "https://images.secondsale.com/images/9546e33b4fd7d78f04afb76aeeb6287d.jpg"
    ),
    ];
  getBooks() {
  return this.allBooks.slice();
  }
  }
