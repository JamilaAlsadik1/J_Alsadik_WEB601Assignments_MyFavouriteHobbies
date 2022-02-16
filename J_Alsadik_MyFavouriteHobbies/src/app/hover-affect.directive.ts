import { Directive,ElementRef,HostListener,Input,OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  constructor(private eRaf:ElementRef) { }
  ngOnInit():void{

  }
  @HostListener('mouseenter') OnMouseenter(){
    this.eRaf.nativeElement.style.textDecoration="underline";
  }
  @HostListener('mouseleave') OnMouseleave(){
    this.eRaf.nativeElement.style.textDecoration="none";
  }
}
