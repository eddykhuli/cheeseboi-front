import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { BrandService } from 'src/app/services/brand.service';
import { HttpParams } from '@angular/common/http';
import { Image } from 'src/app/model/image';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {

 
  products:Product[] = [];
  product:Product = new Product();
  prodImages:Image [] = [];
  constructor(private service:BrandService) { }

  ngOnInit() {
    const url = window.location.href;
    let paramValue;
    if (url.includes('?')) {
      const httpParams = new HttpParams({ fromString: url.split('?')[1] });
      paramValue = httpParams.get("id");
      
    }
    this.service.getProduct(paramValue).subscribe((data:Product) => {
      console.log(data)
      this.product = data;
      this.prodImages = this.product.images;
    });
   console.log(paramValue)
    this.service.getAllProduct().subscribe((response:Product[]) => {
      console.log(response);
          this.products = response;
    });
  }
}
