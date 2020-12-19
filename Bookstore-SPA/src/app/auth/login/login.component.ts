import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {
    username: '',
    password: ''
  };

  error = '';

  constructor(private authService: AuthService, private router: Router) {   }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.model.username, this.model.password).subscribe(user => {
      if(this.authService.loggedIn()){
        this.router.navigate(['/books']);
      }
    }, err => {
      this.error = "Username or password is incorrect";
    });
  }

  

}
