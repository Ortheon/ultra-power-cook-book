import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationGuard implements CanActivate{
  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('access_token')) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
