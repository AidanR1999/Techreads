import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { Book } from '../_models/book';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  //api endpoints
  baseUrl = 'http://localhost:3000/'
  booksUrl = this.baseUrl + 'books/'
  historyUrl = this.baseUrl + 'history/'
  interestsUrl = this.baseUrl + 'interests/'
  recommendationsUrl = this.baseUrl + 'recommendations/'

  constructor(private http: HttpClient) { }

  //general book information functions
  getBook(id: any): Observable<Book>{
    return this.http.get<Book>(this.booksUrl + id);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(this.booksUrl + 'categories');
  }

  //interests and recommendation functions
  getUserInterests(username: string): Observable<any> {
    return this.http.get<any>(this.interestsUrl + username);
  }

  addInterest(category: string, username: string): Observable<any> {
    return this.http.post(this.interestsUrl, { "username": username, "interest": category })
    .pipe(
      map((interest: any) => {})
    )
  }

  getRecommendations(username: string): Observable<any> {
    return this.http.get<any>(this.recommendationsUrl + username);
  }

  //rating and review functions
  addReivew(model: any): Observable<any> {
    return this.http.post(this.booksUrl + 'review/' + model.bookId, { "username": model.username, "review": model.review})
    .pipe(
      map((review: any) => {})
    )
  }

  addRating(rating: any, bookId: any): Observable<any> {
    return this.http.get<Book>(this.booksUrl + 'rate/' + bookId + '/' + rating);
  }

  //history functions
  getHistory(username: any): Observable<any> {
    return this.http.get<any>(this.historyUrl + username);
  }

  addBookToHistory(bookId: any, username: any): Observable<any> {
    return this.http.post(this.historyUrl, {"username": username, "bookId": bookId, "date": new Date().toUTCString() })
    .pipe(
      map((history: any) => {})
    )
  }

  //search functions
  bookSearchByTitle(query: string): Observable<any> {
    return this.http.get<Book[]>(this.booksUrl + 'search/' + query);
  }
  bookSearchByAuthor(query: string): Observable<any> {
    return this.http.get<Book[]>(this.booksUrl + 'category/' + query);
  }
  bookSearchByCategory(query: string): Observable<any> {
    return this.http.get<Book[]>(this.booksUrl + 'authors/' + query);
  }
}
