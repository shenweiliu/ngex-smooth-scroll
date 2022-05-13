import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxPageScrollModule } from './ngx-page-scroll/ngx-page-scroll.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgxPageScrollModule
    ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
