import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class LoginService {
  isLoggedIn: boolean = false;
  constructor() { }

  login(user: User) {
    if (user.userName === 'test' && user.password === 'test') {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }

}
