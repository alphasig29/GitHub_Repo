import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-form-reactive',
  templateUrl: './book-form-reactive.component.html',
  styleUrls: ['./book-form-reactive.component.css']
})
export class BookFormReactiveComponent implements OnInit {
  reactiveBookForm: FormGroup;
  formHasBeenSubmitted = false;

  constructor() { }

  ngOnInit(): void {
    this.reactiveBookForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      genre: new FormControl('mystery', Validators.required)
    });
  }

  onFormSubmit(){
    this.formHasBeenSubmitted = true;
    setTimeout(() => {
      this.reactiveBookForm.reset()
    }, 4000);
    this.formHasBeenSubmitted = false;
  }
}
