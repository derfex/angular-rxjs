import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StringsObserverComponent } from './strings-observer/strings-observer.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    StringsObserverComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
})
export class AppModule {
}
