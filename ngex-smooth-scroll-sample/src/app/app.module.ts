import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SmoothScrollModule } from './ngex-smooth-scroll/smooth-scroll.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        SmoothScrollModule
    ],
    declarations: [
        AppComponent                
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
