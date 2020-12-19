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
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule } from '@angular/forms' 
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewComponent } from './books/review/review.component';
import { CreateReviewComponent } from './books/create-review/create-review.component';
import { HistoryComponent } from './books/history/history.component';
import { InterestsComponent } from './books/interests/interests.component' 

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    CardComponent,
    NavComponent,
    DetailsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ReviewComponent,
    CreateReviewComponent,
    HistoryComponent,
    InterestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
