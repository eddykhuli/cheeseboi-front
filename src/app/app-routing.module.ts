import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { AdminPortalComponent } from './components/admin/admin-portal/admin-portal.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { AddCategoryComponent } from './components/admin/add-category/add-category.component';
import { AddBrandComponent } from './components/admin/add-brand/add-brand.component';
import { AddSubCategoryComponent } from './components/admin/add-sub-category/add-sub-category.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ShowProductsComponent } from './components/product/show-products/show-products.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'login', component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'admin', component : AdminPortalComponent},
  {path: 'add-product', component : AddProductComponent},
  {path: 'add-brand', component : AddBrandComponent},
  {path: 'add-category', component : AddCategoryComponent},
  {path: 'add-sub-category', component : AddSubCategoryComponent},
  {path: 'brand', component : AddBrandComponent},
  {path: 'welcome', component : WelcomeComponent},
  {path: 'product', component : ShowProductsComponent}       
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
