export class User {
  private _usernameOrEmail: string;
  // private _password: string;
  private _token?: string;


  constructor() {
  }

  get usernameOrEmail(): string {
    return this._usernameOrEmail;
  }

  set usernameOrEmail(value: string) {
    this._usernameOrEmail = value;
  }

  // get password(): string {
  //   return this._password;
  // }
  //
  // set password(value: string) {
  //   this._password = value;
  // }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }
}
