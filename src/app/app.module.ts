import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrandService } from './services/brand.service';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { OwlModule } from 'ngx-owl-carousel';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddBrandComponent } from './components/admin/add-brand/add-brand.component';
import { AddCategoryComponent } from './components/admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './components/admin/add-sub-category/add-sub-category.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { AdminPortalComponent } from './components/admin/admin-portal/admin-portal.component';
import { RegisterComponent } from './components/user/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { ShowProductsComponent } from './components/product/show-products/show-products.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    AddBrandComponent,
    AddCategoryComponent,
    AddSubCategoryComponent,
    AddProductComponent,
    AdminPortalComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    ShowProductsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatSelectModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    OwlModule,
    // MaterialModule
  ],
  providers: [BrandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
