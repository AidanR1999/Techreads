import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { BookService } from 'src/app/_services/book.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  model: any;
  starRating = 0;
  hasReview = false;
  isRead = false;

  ratings: any[] = [];
  ratingPerc: any[] = [0, 0, 0, 0, 0];

  constructor(private bookService: BookService, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id).subscribe(data => {
      this.model = data;
      this.starRating = this.calculateAverage();
      this.checkHistory();
      this.getIndividualRatings();
    });
  }

  calculateAverage(): number{
    var sum = 0;
    for(var i = 0; i < this.model.ratings.length; ++i){
      sum = sum + parseInt(this.model.ratings[i]);
    }

    return Math.round(sum / this.model.ratings.length);
  }

  calculateEnjoyed(){
    var count = 0;
    for(var i = 0; i < this.model.ratings.length; ++i){
      if(parseInt(this.model.ratings[i]) > 2)
          count = count + 1;
    }

    if(this.model.ratings.length == 0) {
      return 0;
    }

    return Math.round((count / this.model.ratings.length) * 100)
  }

  getIndividualRatings() {
    for(var n = 1; n < 6; ++n){
      var count = 0;
      for(var i = 0; i < this.model.ratings.length; ++i){
        if(parseInt(this.model.ratings[i]) == n)
            count = count + 1;
      }
      this.ratings.push(count);
      this.getPercentageRatings(count, n);
    }

    //reverse rating arrays
    this.ratings.reverse();
    this.ratingPerc.reverse();
  }

  reviewed() {
    let user = this.authService.getCurrentUser();

    let review = this.model.reviews.filter(r => {
      return r.username == user.username
    });

    if(review.length > 0) {
      return true;
    }
    return false;
  }

  getPercentageRatings(count: number, index: number) {
    var percentage = (count / this.model.ratings.length) * 100;
    this.ratingPerc[index - 1] = percentage;
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  markRead() {
    let user = this.authService.getCurrentUser();
    this.bookService.addBookToHistory(this.model.id, user.username).subscribe(history => {})
    this.isRead = true;
  }

  checkHistory() {
    let user = this.authService.getCurrentUser();
    let bookId = this.route.snapshot.paramMap.get('id');
    this.bookService.getHistory(user.username).subscribe(history => {
      let val = history.filter(function(read) {
        return read.bookId == bookId;
      });
      if(val.length > 0) {
        this.isRead = true;
      }
    })
  }

  newReview(review: any){
    this.ngOnInit();
  }

}
