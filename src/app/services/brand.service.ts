import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../model/brand';
import { Category } from '../model/category';
import { ProdColours } from '../model/prodColours';
import { ProdSize } from '../model/prodSize';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
   config = {
    headers: {
        'Content-Type': 'application/json;charset=utf-8;'
    }
};
  baseurl: string = "http://localhost:8888/api/";
  constructor(private http: HttpClient) { }

  getAllBrands(){

    return this.http.get<Brand>(this.baseurl+"brand/get-all-brands",this.config);
  }

  addBrand(brand) {
    
      return this.http.post<Brand>(this.baseurl+"brand/add-brand",brand,this.config);
  }

  addCategoryToBrand(category,brandId) {

     return this.http.post<Category>(this.baseurl+"category/add-category/"+brandId,category,this.config);

  }
  getAllCategories(){

    return this.http.get<Category>(this.baseurl+"category/get-all-categories",this.config);
  }
  getAllColours(){

    return this.http.get<ProdColours>(this.baseurl+"product/all-colours",this.config);
  }
  getAllSizes(){

    return this.http.get<ProdSize>(this.baseurl+"product/all-sizes",this.config);
  }
  
  addproduct(product){
        
      return this.http.post(this.baseurl+"product/add-product/1",product,this.config);
  }

  getAllProduct() {

    return this.http.get(this.baseurl+"product/get-all-products",this.config);
  }
  getProduct(id) {
    return this.http.get<Product>(this.baseurl+"product/getProduct?id="+id,this.config);
  }
  getAllImages() {
     return this.http.get(this.baseurl+"image/get-all-images",this.config);
  }
}
