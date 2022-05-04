//https://pro.academind.com/courses/angular-the-complete-guide/lectures/13906580
//https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, Subject, tap } from "rxjs";
import { throwError } from "rxjs";
import { User } from "./user.model";

export interface AuthResponseData {
  king: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}



@Injectable({providedIn: 'root'})
export class AuthService {
  user = new BehaviorSubject<User>(null);  //https://pro.academind.com/courses/angular-the-complete-guide/lectures/13906592
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient,
      private router:Router) { }

  signUp(email: string, password: string){
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBVTZqQicPnOqdjNMUBa1kM9CqBy7cbMR4',
      {email: email, password: password, returnSecureToken: true}
    ).pipe(catchError(this.handleError), tap(resData => {
     this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    })
    );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVTZqQicPnOqdjNMUBa1kM9CqBy7cbMR4',
      {email: email, password: password, returnSecureToken: true}
    ).pipe(catchError(this.handleError), tap(resData => {
     this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    })
    );
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;} = JSON.parse( localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    const loadedUser = new User(userData.email, userData.id, userData._token,
      new Date(userData._tokenExpirationDate));
    if (loadedUser.token) {
      //have an active user
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }


  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
  }

  // https://pro.academind.com/courses/angular-the-complete-guide/lectures/13906595
  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(email: string, userID: string, token: string, expiresIn: number) {
      const expirationDate = new Date( new Date().getTime() + (expiresIn * 1000));
      const user = new User(email, userID, token, expirationDate);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
      localStorage.setItem('userData', JSON.stringify(user));
  }


  private handleError(errorRes: HttpErrorResponse){
    let errorMessage = 'An unknown error occurred!'
    console.log(errorRes);
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exists.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);

}

}
