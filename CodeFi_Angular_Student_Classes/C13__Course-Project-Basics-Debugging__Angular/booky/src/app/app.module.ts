import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { LibraryComponent } from './library/library.component';
import { BookListComponent } from './bookshelf/book-list/book-list.component';
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
import { BookSearchComponent } from './library/book-search/book-search.component';
import { BookResultsComponent } from './library/book-results/book-results.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BookComponent } from './shared/book/book.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { BookshelfService } from './bookshelf/bookshelf.service';
import { AppRoutingModule } from './app-routing.module';
import { BookshelfHomeComponent } from './bookshelf-home/bookshelf-home.component';
import { BookshelfEditorComponent } from './bookshelf/bookshelf-editor/bookshelf-editor.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { BookFormTdComponent } from './bookshelf/book-form-td/book-form-td.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookFormReactiveComponent } from './bookshelf/book-form-reactive/book-form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    BookshelfComponent,
    LibraryComponent,
    BookListComponent,
    BookDetailsComponent,
    BookSearchComponent,
    BookResultsComponent,
    NavbarComponent,
    BookComponent,
    DropdownDirective,
    BookshelfHomeComponent,
    BookshelfEditorComponent,
    NotificationComponent,
    BookFormTdComponent,
    BookFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BookshelfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
