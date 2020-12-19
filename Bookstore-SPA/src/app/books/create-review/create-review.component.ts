import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/_services/book.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {

  review: any;
  rating = 0;
  @Output() reviewAdded = new EventEmitter<string>();

  constructor(private route: ActivatedRoute, private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  addReview(){
    let userString = localStorage.getItem("user") || '{}';
    let user = JSON.parse(userString)
    let bookId = this.route.snapshot.paramMap.get('id')
    if(user) {
      var review = {
        "username": (user.username),
        "review" : this.review,
        "bookId": bookId
      }
      this.bookService.addReivew(review).subscribe(review => {
        this.bookService.addRating(this.rating, bookId).subscribe(book => {
          this.reviewAdded.emit(review);
        })
      });
    }
  }
}