import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css']
})
export class BookResultsComponent implements OnInit {
  allSearchResults: Book[] = [
    new Book("The Expanse 1", "unknown", "SciFi", "https://source.unsplash.com/50x50/?scifi,book"),
    new Book("The Expanse 2", "not Rowling", "SciFi", "https://source.unsplash.com/50x50/?scifi,book"),
    new Book("The Expanse 3", "fan fiction", "SciFi", "https://source.unsplash.com/50x50/?scifi,book")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
