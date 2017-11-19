import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class LoginService {
  isLoggedIn: boolean = false;
  role: string;
  constructor() { }

  login(user: User) {
    if (user.userName === 'test' && user.password === 'test') {
      this.role = 'User';
      this.isLoggedIn = true;
    }
    else if (user.userName === 'Admin' && user.password === 'Admin') {
      this.role = 'Admin';
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }

}
