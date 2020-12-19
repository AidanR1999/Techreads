import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { BookService } from 'src/app/_services/book.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  categories: any[] = [];
  interests: any[] = [];
  selected: any;
  recommended: any[] = [];

  constructor(private bookService: BookService, private authService: AuthService) { }

  ngOnInit(): void {
    let user = this.authService.getCurrentUser();

    //get categories
    this.bookService.getCategories().subscribe(categories => {
      this.categories = categories;

      //get user interests
      this.bookService.getUserInterests(user.username).subscribe(interests => {
        this.interests = interests;

        this.getRecommendations();
      })
    })
  }


  getRecommendations() {
    let user = this.authService.getCurrentUser();

    this.bookService.getRecommendations(user.username).subscribe(recommendations => {
      this.recommended = recommendations;
    })
  }


  addInterest() {
    let user = this.authService.getCurrentUser();
    let selected = this.selected;

    if(selected != null) {
      let match = this.interests.filter(function(interest) {
        return interest.interest == selected
      })

      if(match.length == 0) {    
        this.bookService.addInterest(this.selected, user.username).subscribe(interest => {
          this.ngOnInit();
        });
      }
    }
  }
}