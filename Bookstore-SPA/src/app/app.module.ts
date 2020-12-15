import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowseComponent } from './books/browse/browse.component';
import { CardComponent } from './books/card/card.component';
import { NavComponent } from './nav/nav.component';
import { DetailsComponent } from './books/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    CardComponent,
    NavComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
