import { Component, EventEmitter, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {
  @Input() book: Book;
  myBooks: Book[] = [];
  sortField: string = 'author';

  constructor(private bookshelfService: BookshelfService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Use the Service to set local "myBooks" array to Service/Global  "myBooks" array
      this.myBooks = this.bookshelfService.getBooks();
    // Listen for changes on the global "myBooks" array and update the  local version
    this.bookshelfService.bookListChanged.subscribe((books: Book[]) => {
    this.myBooks = books;
    });
  }
  onRemoveBook(idx :number) {
  this.bookshelfService.removeBook(idx);
  }

  onNewBook(){
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onSortBooks(){
    if(this.sortField ==='author') {
      this.sortField = 'title';
    } else {
      this.sortField = 'author';
    }
  }

  }
