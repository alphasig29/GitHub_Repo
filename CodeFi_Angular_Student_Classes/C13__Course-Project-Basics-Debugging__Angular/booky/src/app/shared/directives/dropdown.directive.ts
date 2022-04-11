import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";


@Directive({
  selector: "[appDropdown]"
})

export class DropdownDirective {
  // inject some packages
  constructor(private elRef: ElementRef,
              private renderer: Renderer2){}

  // bind the class of 'show' to a new variable 'isOpen'
  @HostBinding('class.show') isOpen = false;

  // listen for a click to toggle the isOpen
    @HostListener('click') toggleOpen() {
      this.isOpen = !this.isOpen;

      //grab the class of 'dropdown-menu
      const dropdownList = this.elRef.nativeElement.querySelector('.dropdown-menu');

      //conditionally add/remve the class of 'show' on the'dropdown-menu'
      if (this.isOpen) {
        this.renderer.addClass(dropdownList, 'show');
      } else {
        this.renderer.removeChild(dropdownList, 'show');
      }

    }


}
