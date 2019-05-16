import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { Product } from 'src/app/model/product';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Image } from 'src/app/model/image';
import { Brand } from 'src/app/model/brand';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

        products:Product[] = [];
        images:Image[] = [];
        image:Image = new Image();
        fileName: string;
        filePreview: string;
        base64String  = null;
        @Input() sanitizeHtml: string;
     
  constructor(private service:BrandService,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.service.getAllProduct().subscribe((response:Product[]) => {
      console.log(response);
          this.products = response;
          var count = 0;
          // this.products.forEach(element => {
          //     count += 1;
          //     // this.base64String =  element.images[0].image;
          //     // console.log("Image "+count, "data:image/bmp;base64," + element.images['0'].image);
          // });
          // console.log("response", this.products);
    });
    this.service.getAllImages().subscribe((response:Image[]) => {
      console.log(response);
          this.images = response;
          
    });
    this.service.getAllBrands().subscribe((response) => {
        console.log( "brands",response);
    });

    this.service.getAllCategories().subscribe((data) => {
      console.log("categories ")
    });
  }  
  

}
