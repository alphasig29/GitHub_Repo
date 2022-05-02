// https://pro.academind.com/courses/angular-the-complete-guide/lectures/13906550
// pro.academind.com/courses/angular-the-complete-guide/lectures/13906531
// changes were made in app.modules.ts
// this will be used for every call that leaves the app (globally)
//  this can also be used to interact with the response

import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor () {
  intercept(req: HttpRequest<any>, next: HttpHandler ) {
    //run this code before the request leaves the app
      // console.log('Request is on its way');
      // console.log(req);
    // have to create a new request, orig req is immutable
    const modifiedRequest = req.clone({headers: req.headers.append('Auth', 'xyz')});
    //run this code to send the request  / continue
    // can access the response... pipe is used for that
    return next.handle(modifiedRequest);

  }



}
