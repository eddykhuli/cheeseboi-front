import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { ProdColours } from 'src/app/model/prodColours';
import { ProdSize } from 'src/app/model/prodSize';
import { Product } from 'src/app/model/product';
import { Brand } from 'src/app/model/brand';
import { SubCategory } from 'src/app/model/subCategory';
import { BrandService } from 'src/app/services/brand.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Image } from 'src/app/model/image';
import { strictEqual } from 'assert';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  categories: Category[] = [];
  product: Product = new Product();
  brand: Brand = new Brand();
  category: Category = new Category();
  subCategory: SubCategory = new SubCategory();

  colours: Array<ProdColours> = [];
  colour: ProdColours = new ProdColours();
  sizes: Array<ProdSize> = [];
  prodSize: ProdSize = new ProdSize();

  myForm: FormGroup;
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  dropColours: Array<ProdColours> = [];
  selectedColours: Array<ProdColours> = [];
  selectedSizes: Array<ProdSize> = [];
  dropdownSettings: any = {};
  dropdownSettings2: any = {};
  dropSizes: Array<ProdSize> = [];
  files: any;
  image: Image = new Image();
  prodImages: Image[] = [];

  fileName: string;

  filePreview: string;

  base64TrimmedURL: any;
  base64DefaultURL: any;
  generatedImage: any;
  constructor(private fb: FormBuilder, private service: BrandService) { }
  selColours = new FormControl();
  ngOnInit() {
    this.service.getAllCategories().subscribe((response) => {
      console.log(this.handleSuccessfulResponse(response));
    });
    this.service.getAllColours().subscribe((response) => {
      console.log(this.handleSuccessfulColourResponse(response));
      this.dropColours = this.colours;

      this.selectedColours = [{ id: 1, colour: 'Red' }];
      this.dropdownSettings = {
        singleSelection: false,
        idField: 'id',
        textField: 'colour',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 5,
        allowSearchFilter: this.ShowFilter
      };
      this.myForm = this.fb.group({
        colour: [this.selectedColours]
      });
    });


    this.service.getAllSizes().subscribe((response) => {
      console.log(this.handleSuccessfulSizeResponse(response));
      this.dropSizes = this.sizes;

      this.selectedSizes = [{ id: 1, prodSize: 'S' }];
      this.dropdownSettings = {
        singleSelection: false,
        idField: 'id',
        textField: 'prodSize',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 5,
        allowSearchFilter: this.ShowFilter
      };
      this.myForm = this.fb.group({
        prodsize: [this.selectedSizes]
      });
    });

  }
  addProduct() {

    // this.product.colours = this.selectedColours;
    // this.product.sizes = this.selectedSizes;
    this.product.images = this.prodImages;
    this.product.category = this.category.name;

    console.log(this.product);

    this.service.addproduct(this.product).subscribe((response) => {

      alert('Successfully added new Product');
    });

  }

  handleSuccessfulColourResponse(response) {
    console.log(response);
    this.colours = response;
  }
  handleSuccessfulSizeResponse(response) {
    console.log(response);
    this.sizes = response;
  }

  handleSuccessfulResponse(response) {
    console.log(response);
    this.categories = response;
  }
  onItemSelect(item: any) {
    console.log('onItemSelect', item);

  }

  onSelectAll(items: any) {
    console.log('onSelectAll', items);
  }
  handleLimitSelection() {
    if (this.limitSelection) {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: 3 });
    } else {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: null });
    }
  }

  getBase64(event) {
    console.log(event);
    let me = this;

    for (let i = 0; i < event.target.files.length; i++) {

      let imageFile = event.target.files[i]; //grab the image file

      let fr = new FileReader(); // create a file reader 
      fr.readAsDataURL(imageFile); //initialize the FileReader with a file to read
      fr.onload = () => // function to call when the fileReader loads a file
      {
        me.image.image = fr.result.toString().split(";base64,")[1] //get the base64 string representation of the file (without file type data)
        console.log("Data: ", me.image.image);
        me.prodImages.push(me.image);
      }

    };

    this.image.image = JSON.stringify(me.image.image);
  }

}
