import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { Brand } from 'src/app/model/brand';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {
  brands:Brand[] = [];
  brand = new Brand();
  constructor(private brandService:BrandService) { }

  ngOnInit() {
      
    this.brandService.getAllBrands().subscribe(response => this.handleSuccessfulResponse(response));
  }

    addBrand(){
      
      this.brandService.addBrand(this.brand).subscribe((response) => {
        alert('Successfully added new brand');
      })
    }

    handleSuccessfulResponse(response)
    {
      console.log(response);
        this.brands = response;
    }
    handleError(error)
    {
      console.log(error);
    }
}
