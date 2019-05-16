import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private service: UserService, private http: HttpClient, private router: Router) {
    this.service.authenticate(undefined, undefined);
  }

  ngOnInit() {
  }

  // toggleNavbar() {
     
  // }

  // function w3_open() {
  //   document.getElementById("mySidebar").style.display = "block";
  // }
   
  // function w3_close() {
  //   document.getElementById("mySidebar").style.display = "none";
  // }
 
  logout() {
        this.service.logOut();
        this.service.authenticated = false;
        this.router.navigateByUrl('/login');
  
  } 

}
