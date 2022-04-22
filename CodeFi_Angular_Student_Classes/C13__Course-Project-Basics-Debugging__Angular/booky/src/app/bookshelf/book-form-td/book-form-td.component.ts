import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-form-td',
  templateUrl: './book-form-td.component.html',
  styleUrls: ['./book-form-td.component.css']
})
export class BookFormTdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(formObj: NgForm){

  }
}
