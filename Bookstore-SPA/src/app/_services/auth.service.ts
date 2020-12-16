import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    console.log("called");
    return this.http.post(this.baseUrl + 'login/', { "username": username, "password": password } )
    .pipe(
      map((user: any) => {
        if(user) {
          localStorage.setItem('user', JSON.stringify(user));
          console.log(user);
        }
      })
    )
  }

  register(username: string, password: string) {
    console.log(username, password);
    return this.http.post(this.baseUrl + 'register', { "username": username, "password": password })
    .pipe(
      map((user: any) => {
        if(user) {
          localStorage.setItem('user', JSON.stringify(user))
        }
      })
    )
  }

  loggedIn() {
    const user = localStorage.getItem('user');
    if(user) {
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem('user');
  }
}
