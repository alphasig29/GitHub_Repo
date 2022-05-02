import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {


  constructor(private http: HttpClient,
        private libraryService: LibraryService) { }

  ngOnInit(): void {
    
  }

  onBookSearch(bookSearchText: string) {
    this.libraryService.fetchBooksFromAPI(bookSearchText);


  }
}
