// Dynamic Componet
// https://pro.academind.com/courses/angular-the-complete-guide/lectures/13906612

import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
 @Input() message: string;
  @Output() close = new EventEmitter<void>();


  onClose() {
    this.close.emit();
  }



}
