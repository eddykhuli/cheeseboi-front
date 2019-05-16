import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user';
import { BrandService } from 'src/app/services/brand.service';
import { Product } from 'src/app/model/product';
import { Image } from 'src/app/model/image';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user:User = new User();
  products:Product[] = [];
  images:Image[] = [];
  ima:Image[] = [];
  constructor(private service: UserService,private bservice:BrandService, private http: HttpClient) {
 
  }


  ngOnInit() {
    // this.service.getUser(sessionStorage.getItem("username")).subscribe((data:User) => {
    //     this.user =data;
    //     console.log("Logged In User", this.user)
    // });
  
    this.bservice.getAllProduct().subscribe((response:Product[]) => {
      console.log(response);
          this.products = response;
          for(var i = 0; i < this.products.length;i++) {
            // 
            // console.log("hghjjgjh ",this.products[i].images[1]);
            console.log("Prod Images",this.products[i]);
            this.ima.push( this.products[i].images[1]);
            console.log("hghjjgjh ",this.products[i].images[1])
            
          }
          var count = 0;
    });
    this.bservice.getAllImages().subscribe((response:Image[]) => {
      console.log("images",response);
          this.images = response;
          
    });
    
    this.bservice.getAllBrands().subscribe((response) => {
        console.log( "brands",response);
    });

    this.bservice.getAllCategories().subscribe((data) => {
      console.log("categories  :",data);
    });

   
  } 
  initialSide()
  {
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("opnbtn").style.display = "block"
    document.getElementById("closebtn").style.display = "none"
    document.getElementById("mySidenav").style.width = "40px";
  }
   openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("closebtn").style.display = "block"
    document.getElementById("opnbtn").style.display = "none"

  }
  
   closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("opnbtn").style.display = "block"
    document.getElementById("closebtn").style.display = "none"
    //To make side bar appear abit after toogling off 
    //  e.gdocument.getElementById("mySidenav").style.width = "40px";
  }   

  authenticated() { return this.service.authenticated; }

}
