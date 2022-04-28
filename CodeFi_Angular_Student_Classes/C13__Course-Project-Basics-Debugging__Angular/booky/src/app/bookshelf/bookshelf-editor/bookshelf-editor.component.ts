import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BookshelfService } from '../bookshelf.service';
import { Book } from 'src/app/shared/book/book.model';


@Component({
  selector: 'app-bookshelf-editor',
  templateUrl: './bookshelf-editor.component.html',
  styleUrls: ['./bookshelf-editor.component.css']
})
export class BookshelfEditorComponent implements OnInit {
  idx: number;
  isEditMode = false;
  bookDetails: Book = {
    title: '',
    author: '',
    genre: '',
    coverImg: 'https://source.unsplash.com/random/250x250?book'
  }

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookshelfService: BookshelfService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params["id"];
      this.isEditMode = params["id"] != null;
      if (this.isEditMode){
        this.bookDetails = this.bookshelfService.getBookshelfBook(this.idx);
      }


      console.log("%c isEditMode: ", "color: red;", this.isEditMode);
      });
   }

   onBookFormSubmit(formObj: NgForm ){
    // destructure the values form the 'formObj'
    const {title, author, genre, coverImg} = formObj.value;

    // set the local bookDetails object to a new bitnw ith the formObj values
    this.bookDetails = new Book(title, author, genre, coverImg);
    // condituonally call diff methods depending on the mode we are in
    if(this.isEditMode){
      this.bookshelfService.updateBookshelfBook(this.idx, this.bookDetails);
    } else {
      this.bookshelfService.saveBook(this.bookDetails);
    }
    // reset form
    this.onResetForm();
   }

   onResetForm(){
    this.router.navigate(['../'], {relativeTo: this.route});
   }
}
