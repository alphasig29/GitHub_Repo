import { Injectable, EventEmitter } from "@angular/core";
import { Book } from "../shared/book/book.model";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class LibraryService {
  bookListChanged = new Subject<Book[]>();
  private allBooks: Book[] = [];
  private allBooks1: Book[] = [
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

    constructor(private http: HttpClient){}

  getBooks() {
  return this.allBooks.slice();
  }

  fetchBooksFromAPI(query:string) {
    const formattedQuery = query.split(" ").join('+').toLowerCase();
    this.http.get(`https://openlibrary.org/search.json?q=${formattedQuery}`)
    .subscribe((searchResponse: any) => {
      const mostReleventBooks = searchResponse.docs.slice(0,7);
      this.saveBooksToGlobalArray(mostReleventBooks);

    });
  }

  saveBooksToGlobalArray(books) {
    books.forEach((book:any) => {
      const newBook: Book = new Book(
        book.title,
        book.author_name ? book.author_name[0] : 'unknow',
        'unknown',
        'http'
        );

      this.allBooks.push(newBook);
      console.log(newBook);
    });
    this.bookListChanged.next(this.allBooks.slice());
  }
  }
