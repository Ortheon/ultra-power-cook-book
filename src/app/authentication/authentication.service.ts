import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private httpClient: HttpClient, private router: Router) {}
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })};

  signup(username: string, password: string) {
    // temporary xD
    return this.httpClient
      .post('https://localhost:8443/login',
        {
          username: username,
          password: password
        }, this.httpOptions);
  }
}
