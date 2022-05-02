import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BookshelfService } from "src/app/bookshelf/bookshelf.service";
import { Book } from "../book/book.model";

@Injectable({providedIn: 'root'})
export class HTTPServivce{
  // must always add a json fiel to the end of the firebase url
  firebaseRootURL = "https://booky-data-default-rtdb.firebaseio.com/books.json";

  constructor(private http: HttpClient,
            private bookshelfService: BookshelfService){}


  saveBooksToFirebase(){
    const books: Book[] = this.bookshelfService.getBooks();

    this.http.put(this.firebaseRootURL, books).subscribe((response) => {
      console.log('firebase response', response);
    });

  }

  fetchBooksFromFirebase() {
    const books = this.http.get(this.firebaseRootURL, {}).subscribe((response: any) => {
      this.bookshelfService.setBookshelfBooks(response);
    });
  }


}
