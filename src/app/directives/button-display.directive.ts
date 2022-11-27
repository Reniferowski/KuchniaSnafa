import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appButtonDisplay]'
})
export class ButtonDisplayDirective {

  constructor(private buttonRef: ElementRef) {}
  @Input() condition: Boolean = false;

  onInit() {
    const element =this.buttonRef.nativeElement;
    element.disabled = this.condition;
  }

  ngOnChanges(changes: SimpleChanges): void {
      const element =this.buttonRef.nativeElement;

      if (this.condition) {
        element.disabled = this.condition;
      }
      else {
        element.disabled = this.condition;
      }
  }
}
