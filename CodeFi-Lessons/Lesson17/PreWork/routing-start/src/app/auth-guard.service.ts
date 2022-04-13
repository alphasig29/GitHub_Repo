import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
// import { promises } from "dns";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";



@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService,
        private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // want to be able to log in or out
      return this.authService.isAuthenticated()
        .then(
          (authenticated: boolean) =>  {
            if (authenticated) {return true;
            } else {
              this.router.navigate(['/']);
            }
          }
        );
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(childRoute ,state);
  }
}
