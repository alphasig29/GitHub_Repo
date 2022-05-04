// https://pro.academind.com/courses/angular-the-complete-guide/lectures/13906588

import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { take, exhaustMap } from "rxjs";


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  return this.authService.user.pipe(take(1), exhaustMap(user => {
    if (!user) {
      return next.handle(req);
    }
    const modifiedReq = req.clone({params: new HttpParams().set('auth', user.token)});
    return next.handle(modifiedReq);
  }));


}

}
