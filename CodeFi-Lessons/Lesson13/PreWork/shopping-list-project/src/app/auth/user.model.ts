//https://pro.academind.com/courses/angular-the-complete-guide/lectures/13906592

export class User {

  constructor(public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date) { }

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }



}



