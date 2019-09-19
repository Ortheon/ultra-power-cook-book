import {Component} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './authentication.component.html'
})
export class AuthenticationComponent {
  isLoginMode = false;
  isLoadingData = false;
  error: string = null;

  constructor(private authenticationService: AuthenticationService) {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const username = form.value.text;
    const password = form.value.password;

    this.isLoadingData = true;

    if (this.isLoginMode) {
      // ..
    } else {
      this.authenticationService.signup(username, password).subscribe(
        resData => {
          console.log(resData);
          this.isLoadingData = false;
        },
        errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;
        });
    }


    // form.reset();
  }
}
