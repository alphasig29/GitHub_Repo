import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterContentInit(){
    console.log('The Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }
}
