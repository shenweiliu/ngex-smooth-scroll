import { Directive, OnInit, ElementRef, Input } from '@angular/core';
import { ScrollMainDirective } from './scroll-main.directive';

@Directive({
  selector: '[scrollTarget]',
})
export class ScrollTargetDirective implements OnInit {
    @Input('scrollTarget') id: string = '';

    constructor(private targetElem: ElementRef<HTMLElement>, private scrollMainDirective: ScrollMainDirective
    ) {}

    ngOnInit() {
        this.scrollMainDirective.addTargetToDictionary(this);
    }
    
    scroll() {
        this.targetElem.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: "start",
            inline: "nearest"
        });
    }
}
