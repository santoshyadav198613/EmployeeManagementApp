import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot,
  RouterStateSnapshot, CanActivateChild  
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.isLoggedIn) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(childRoute.url);
    console.log(childRoute);
    if (this.loginService.role === 'Admin') {
      return true;
    }
    return false;
  }
}
