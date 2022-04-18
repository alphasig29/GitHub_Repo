import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male', Validators.required),
      'hobbies': new FormArray([])
    });
}

onSubmit(){
  console.log(this.signupForm);
}

getControls() {
  return (<FormArray>this.signupForm.get('hobbies')).controls;
}
onAddHobbies(){
  const control = new FormControl(null, Validators.required);
  //must cast as formArray
  (<FormArray>this.signupForm.get('hobbies')).push(control);
}

// in the Validator array, must bind 'this'
// to get this.forbiddenuernames in scope in funciton below
forbiddenNames(control: FormControl): {[s: string]: boolean} {
  if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
    return {'nameIsForbidden': true};
  }
  // must return nothing or null, should not pass false
  return null;
}

}
