import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  credentials = {username: '', password: ''};
  user:User = new User();
  constructor(private service: UserService, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.service.authenticate(this.credentials.username, () => {
        this.router.navigateByUrl('/welcome');
    });
    return false;
  }

  // username = ''
  // password = ''
  invalidLogin = false

  checkLogin() {
    (this.service.authenticate(this.credentials.username, this.credentials.password).subscribe(
      data => {

       if(data == null)
       {
         this.router.navigate(['/login'])
       }
        this.router.navigate(['/welcome'])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
        this.router.navigate(['/login'])
      }
    )
    );
    console.log(this.credentials.username,this.credentials.password)

  }
}
 