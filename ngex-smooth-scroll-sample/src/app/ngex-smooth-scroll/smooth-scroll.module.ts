import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScrollMainDirective } from './scroll-main.directive';
import { ScrollAnchorDirective } from './scroll-anchor.directive';
import { ScrollTargetDirective } from './scroll-target.directive';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        ScrollMainDirective,
        ScrollAnchorDirective,
        ScrollTargetDirective        
    ],
    exports: [
        ScrollMainDirective,
        ScrollAnchorDirective,
        ScrollTargetDirective
    ]
})
export class SmoothScrollModule {}
