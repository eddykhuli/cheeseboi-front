import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Brand } from 'src/app/model/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  
  brands:Brand[] = [];
  category:Category =  new Category();
  brand:Brand = new Brand();
constructor(private service:BrandService) { }

ngOnInit() {
  this.service.getAllBrands().subscribe(response => console.log(this.handleSuccessfulResponse(response))
  );
 
}

addCategory(i:Number) {
      // this.category = category;
      console.log('returned category'+JSON.stringify(this.category));
    this.service.addCategoryToBrand(this.category,i).subscribe((response) => {
      alert("successfully Added new Category " + JSON.stringify(response));
    });
}
handleSuccessfulResponse(response)
  {
    console.log(response);
      this.brands = response;
  }


}
