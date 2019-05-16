import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  config = {
    headers: {
      'Content-Type': 'application/json;charset=utf-8;',
      'Access-Control-Allow-Origin': 'http://localhost:8888',
      'Access-Control-Allow-Credentials':  'true' ,
     
    }
  };
  authenticated = false;
  baseurl: string = "http://localhost:8888/api/";
  users:User[] = [];
  constructor(private http: HttpClient) { }

  registerUser(user) {
    this.http.get<User>(this.baseurl + "",this.config);
    return this.http.post<User>(this.baseurl+"user/register",user,this.config);
  }

  authenticate(username, password) {
     const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
     headers.append('Content-Type', 'application/json;charset=utf-8');

        return this.http.get<User>(this.baseurl+"user/login?email="+username,{headers}).pipe(
          map((userData) => {
            sessionStorage.setItem('username',username);
            console.log("Logged IN USER",userData)
          })
        );
      //  return this.http.options('http://localhost:8888/validateLogin?username='+username+'&password='+password,{headers})
  } 

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
  getAllUsers() {
    return this.http.get(this.baseurl + "user/getAllUsers",this.config);
  }
  getUser(email) {
    return this.http.get<User>(this.baseurl  + "user/getUser?email="+email,this.config);
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
