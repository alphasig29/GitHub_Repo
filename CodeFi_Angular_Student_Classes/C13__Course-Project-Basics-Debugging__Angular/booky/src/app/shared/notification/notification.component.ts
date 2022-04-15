import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';
import { Book } from '../book/book.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {
  private addBookSubscription: Subscription;

  constructor(private bookshelfService: BookshelfService) { }

  ngOnInit(): void {
    this.addBookSubscription = this.bookshelfService.bookSelected.subscribe((bookDetails:Book) => {
      // console.log(bookDetails);
      alert(`Successfully added: ${bookDetails.title} by ${bookDetails.author} !`)
    });
  }

  ngOnDestroy(): void {
    this.addBookSubscription.unsubscribe();
  }
}
