// https://pro.academind.com/courses/angular-the-complete-guide/lectures/13906531
import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";

export class LogginInterceptorService implements HttpInterceptor(){
  intercept(req: HttpRequest<any>, next: HttpHandler){
    console.log('outgoing request');
    console.log(req.url);
    console.log(req.headers);
    return next.handle(req).pipe(tap( event => {
      if(event.type === HttpEventType.Response) {
        console.log('Incoming response');
        console.log(event.body);
      }
    }));
  }
}
