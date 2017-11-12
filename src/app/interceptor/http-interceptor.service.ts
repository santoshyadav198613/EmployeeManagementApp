import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    if (req.method === 'POST') {
      let newRequest = req.clone({ headers: req.headers.set('newtoken', 'thisisnewtoken') })
      console.log(newRequest);
      return next.handle(newRequest);
    }
    return next.handle(req);
  }
}
