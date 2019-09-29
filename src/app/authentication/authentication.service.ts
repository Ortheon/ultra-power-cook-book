import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Token} from '../shared/token';
import {map, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../shared/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !==  null;
  }

  public userStatus: string;
  public userStatusChanges: BehaviorSubject<string> = new BehaviorSubject<string>(this.userStatus);
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })};

  setUserStatus(userStatus: any): void {
    this.userStatus = userStatus;
    this.userStatusChanges.next(userStatus);
  }

  login(username: string, password: string) {
    return this.httpClient
      .post<Token>('http://localhost:5000/api/auth/signin',
        {
          usernameOrEmail: username,
          password: password
        }, this.httpOptions);
  }
  signup(name: string, username: string, email: string, password: string) {
    return this.httpClient
      .post('http://localhost:5000/api/auth/signup',
        {
          name: name,
          username: username,
          email: email,
          password: password
        }, this.httpOptions);
  }

  public logout() {
    console.log('user logged out successfully');
    localStorage.removeItem('access_token');
    this.setUserStatus(null);
    this.router.navigate(['/login']);
  }

  public getStatusOnRefresh() {

    if (localStorage.getItem('access_token')) {
      this.setUserStatus(localStorage.getItem('access_token'));
      console.log(this.userStatus);
    }

  }
}
