import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {
    username: '',
    password: '',
    confPassword: ''
  };

  error = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    if(this.model.password == this.model.confPassword){
      this.authService.register(this.model.username, this.model.password).subscribe(data => {
        this.router.navigate(['/books'])
      }, err => {
        this.error = "Username is already taken"
      })
    } else {
      this.error = "Passwords do not match"
    }
  }

}
