import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component ({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [`
      .warning{
        color: red;
      }
      span {
        padding:  20px;
        background-color: mistyrose;
        border: 1pc solid red;
      }
      `]
})

export class WarningAlertComponent {}
