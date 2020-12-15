import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../_models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl = 'http://localhost:3000/'
  booksUrl = this.baseUrl + 'books'

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }
}
