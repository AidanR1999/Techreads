import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/_services/book.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  books: any;
  booksSearch: any;
  query = '';

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
      this.booksSearch = this.books;
    });
  }

  search() {
    console.log(this.query)
    //reset books if query is empty
    if(this.query == '') {
      this.booksSearch == this.books;
    }

    //begin search
    this.bookService.bookSearchByTitle(this.query).subscribe(booksTitle => {
      this.bookService.bookSearchByAuthor(this.query).subscribe(booksAuthor => {
        this.bookService.bookSearchByCategory(this.query).subscribe(booksCategory => {
          //combine all arrays
          let intersection = booksTitle.concat(booksAuthor);
          let allLists = intersection.concat(booksCategory);
          
          //filter duplicates
          this.booksSearch = allLists.filter((value, index, array) => 
          !array.filter((v, i) => JSON.stringify(value) == JSON.stringify(v) && i < index).length);
     
        })
      })
    })
  }

}
