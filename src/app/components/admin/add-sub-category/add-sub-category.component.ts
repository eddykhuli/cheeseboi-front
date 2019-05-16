// import { Component, OnInit } from '@angular/core';
// import { ProdColours } from 'src/app/model/prodColours';
// import { BrandService } from 'src/app/services/brand.service';
// import { FormControl } from '@angular/forms';

// @Component({
//   selector: 'app-add-sub-category',
//   templateUrl: './add-sub-category.component.html',
//   styleUrls: ['./add-sub-category.component.css']
// })
// export class AddSubCategoryComponent implements OnInit {

//     dropdownList = [];
//   selectedItems = [];
//   dropdownSettings = {};
//   colours:ProdColours[] = [];
//   colour:ProdColours = new ProdColours();

//   constructor(private service: BrandService) { }
  
//   ngOnInit() {
//     this.service.getAllColours().subscribe((response) => {
//       console.log(this.handleSuccessfulColourResponse(response));
//     });
//     this.dropdownList = [
//       { item_id: 1, item_text: 'Mumbai' },
//       { item_id: 2, item_text: 'Bangaluru' },
//       { item_id: 3, item_text: 'Pune' },
//       { item_id: 4, item_text: 'Navsari' },
//       { item_id: 5, item_text: 'New Delhi' }
//     ];
//     this.selectedItems = [
//       { item_id: 3, item_text: 'Pune' },
//       { item_id: 4, item_text: 'Navsari' }
//     ];
//     this.dropdownSettings = {
//       singleSelection: false,
//       idField: 'item_id',
//       textField: 'item_text',
//       selectAllText: 'Select All',
//       unSelectAllText: 'UnSelect All',
//       itemsShowLimit: 3,
//       allowSearchFilter: true
//     };
//   }
//   onItemSelect(item: any) {
//     console.log(item);
//   }
//   onSelectAll(items: any) {
//     console.log(items);
//   }

//     handleSuccessfulColourResponse(response)
//   {
//     console.log(response);
//       this.colours = response;
//   }

//   toppings:FormControl = new FormControl();
//   toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];




// }
import {Component, OnInit} from '@angular/core';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms';
import { BrandService } from 'src/app/services/brand.service';
import { ProdColours } from 'src/app/model/prodColours';

 @Component({
    selector: 'app-add-sub-category',
    templateUrl: './add-sub-category.component.html',
    styleUrls: ['./add-sub-category.component.css']
  })
  export class AddSubCategoryComponent implements OnInit {
    selColours = new FormControl();

      colours:Array<ProdColours> = [];
    colour:ProdColours = new ProdColours();
    myForm:FormGroup;
        disabled = false;
        ShowFilter = false;
        limitSelection = false;
        dropColours: Array<ProdColours> = [];
        selectedColours: Array<ProdColours> = [];
        dropdownSettings: any = {};
        constructor(private fb: FormBuilder,private service:BrandService) {}

        ngOnInit() {

          this.service.getAllColours().subscribe((response) => {
              this.handleSuccessfulColourResponse(response);
              console.log(this.colours)
        
             console.log(this.colours.length)
           
              this.dropColours = this.colours;
          });
         
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
        }


        onItemSelect(item: any) {
            console.log('onItemSelect', item);
        }
        onSelectAll(items: any) {
            console.log('onSelectAll', items);
        }
        toogleShowFilter() {
            this.ShowFilter = !this.ShowFilter;
            this.dropdownSettings = Object.assign({}, this.dropdownSettings, { allowSearchFilter: this.ShowFilter });
        }

        handleLimitSelection() {
            if (this.limitSelection) {
                this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: 3 });
            } else {
                this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: null });
            }
        }
   handleSuccessfulColourResponse(response)
     {
       console.log(response);
         this.colours = response;
     }
  
}

