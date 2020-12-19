import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { BookService } from 'src/app/_services/book.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  books: any[] = [];

  constructor(private bookService: BookService, private authService: AuthService) { }

  ngOnInit(): void {
    let user = this.authService.getCurrentUser();

    //get history
    let rawHistory = this.bookService.getHistory(user.username).subscribe(data => {
      data.forEach(x => {
        this.bookService.getBook(x.bookId).subscribe(book => {
          let newBook: any = book;
          newBook.date = x.date;
          this.books.push(newBook);
        })
      });
    });
  }

}
