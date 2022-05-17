import { Directive } from '@angular/core';
import { ScrollTargetDirective } from './scroll-target.directive';

@Directive({
  selector: '[scrollMain]',
})
export class ScrollMainDirective {
    //Hold key-value pair dictionary for target elements.
    private targets: any = new Map<string, ScrollTargetDirective>();

    scroll(id: string) {
        //Called when clicking anchor link.
        this.targets.get(id)!.scroll();
    }

    addTargetToDictionary(target: ScrollTargetDirective) {
        //Populate targets dictionary.
        this.targets.set(target.id, target);
    }    
}
