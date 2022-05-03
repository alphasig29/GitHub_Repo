// https://pro.academind.com/courses/angular-the-complete-guide/lectures/13906579

import { Component } from "@angular/core";


@Component({
  selector: 'app-loading-spinner',
  template: '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent {}
