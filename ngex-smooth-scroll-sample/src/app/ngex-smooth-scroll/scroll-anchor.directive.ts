import { Directive, HostListener, Input } from '@angular/core';
import { ScrollMainDirective } from './scroll-main.directive';

@Directive({
  selector: '[scrollAnchor]',
})
export class ScrollAnchorDirective {
    @Input('scrollAnchor') id: string = '';
    
    constructor(private scrollMainDirective: ScrollMainDirective) {
    }

    @HostListener('click') onClick() {
        this.scrollMainDirective.scroll(this.id);
    }
}
