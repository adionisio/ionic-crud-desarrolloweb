import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  public isLoggedIn: boolean = false;
  private api:string = "http://79368a59.ngrok.io/api-rest-users-mysql";
  //private api:string = "http://localhost:3000/api-rest-users-mysql";

  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');
  }

  public login(user){
    return this.http.post(`${this.api}/login`,user).map(
      (res: Response) =>{
        return res.json();
      }
    )
  }

  getUser(){
    return JSON.parse(localStorage.getItem('user'));
  }

}
