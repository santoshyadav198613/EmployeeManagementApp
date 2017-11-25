import { LoginService } from '../login/login.service';
import { TodoService } from './todo.service';
import { HttpClient } from '@angular/common/http';

export function todoServiceProvider(loginService: LoginService, http: HttpClient) {
    return new TodoService(loginService.isLoggedIn, http);
}

export let todoFactory = {
    provide: TodoService,
    useFactory: todoServiceProvider,
    deps: [LoginService, HttpClient]
}
