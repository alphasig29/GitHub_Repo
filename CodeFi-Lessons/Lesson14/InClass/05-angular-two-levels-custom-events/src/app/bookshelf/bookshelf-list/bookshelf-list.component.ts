import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bookshelf-list',
  templateUrl: './bookshelf-list.component.html',
  styleUrls: ['./bookshelf-list.component.css']
})
export class BookshelfListComponent implements OnInit {
  books:{title: string, author: string}[] = [
    {title: "Harry Potter", author: "J. K. Rowlling"},
    {title: "Girl with the Dragon Tatoo", author: "Stieg Larsson"},
    {title: "The Lord of the Rings", author: "J. R. R. Tolkien"}
  ];
  @Output() onSelectedBook = new EventEmitter<{title: string, author: string}>();



  constructor() { }

  ngOnInit(): void {
  }

  onBookClick(selTitle: string, selAuthor: string){
    // console.log('emitting selected book: ' + selTitle + ', ' + selAuthor);
    this.onSelectedBook.emit({
      title: selTitle,
      author: selAuthor
    })
  }
}
