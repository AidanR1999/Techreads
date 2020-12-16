import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  username: string

  constructor(private authService: AuthService, private router: Router) {
    this.username = "";
   }

  ngOnInit(): void {
    const userString = localStorage.getItem('user') || '{}';
    const user = JSON.parse(userString);
    if(user) {
      this.username = user.username;
    }
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/books'])
  }

}
