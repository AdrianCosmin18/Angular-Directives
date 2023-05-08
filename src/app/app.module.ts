import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightTextDirective } from './directives/highlight-text.directive';
import { RendererHighlightDirective } from './directives/renderer-highlight.directive';
import { AlternateIfDirective } from './directives/alternate-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightTextDirective,
    RendererHighlightDirective,
    AlternateIfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
