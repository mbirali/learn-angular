import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[laHighlight]",
})
export class HighlightDirective {
  constructor(private _elementRef: ElementRef) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight("#f0fdfa");
    this._elementRef.nativeElement.style.border = "0px";
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight("");
    this._elementRef.nativeElement.style.border = "1px solid";
  }

  private highlight(color: string) {
    this._elementRef.nativeElement.style.backgroundColor = color;
  }
}
